import base64 from 'hi-base64'
// import router from '@/router'

/**
 * base 64 編碼
 * @param {string} str 要編碼的字串
 */
export const b64EncodeUnicode = str => base64.encode(str)

/**
 * base 64 Bytes 編碼
 * @param {string} arr 要編碼的字串
 */
export const b64EncodeUnicodeBytes = arr => b64EncodeUnicode(new Uint8Array(arr))

/**
 * base 64 解碼
 * @param {string} str 要解碼的字串
 */
export const b64DecodeUnicode = str => base64.decode(str)

/**
 * base 64 Bytes 解碼
 * @param {string} str 要解碼的字串
 */
export const b64DecodeUnicodeBytes = str => base64.decode.bytes(str)
/**
 * 取得 Cookie
 * @param {string} cname Cookie Name
 */
export const getCookie = (cname) => {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}
/**
 * 判斷是否為 json 格式
 * true 轉換成 javascript 可用的格式
 * false 返回空字串
 * @param {string} string json 字串
 */
export const handleJson = (string) => {
    try {
        return JSON.parse(string)
    } catch (error) {
        return ''
    }
}
/**
 * 設定 localStorage
 * true 返回 localStorage 並進行 json 檢測
 * false 返回空字串
 * @param {string} key localStorage 的 Key
 * @param {string} data 資料
 * @param {boolean} isJson 是否 Json
 */
export const setStorage = (key, data, isJson = true) => {
    if (isJson) {
        localStorage[b64EncodeUnicode(key)] = b64EncodeUnicode(JSON.stringify(data))
        return
    }
    localStorage[b64EncodeUnicode(key)] = b64EncodeUnicode(data)
    return
}

/**
 * 取得 localStorage 並判斷有無
 * true 返回 localStorage 並進行 json 檢測
 * false 返回空字串
 * @param {string} key localStorage 的 Key
 * @param {boolean} isJson 是否 Json
 */
export const getStorage = (key, isJson = true) => {
    const storage = localStorage[b64EncodeUnicode(key)]
    if (storage) {
        try {
            const unCode = b64DecodeUnicode(storage)
            if (isJson) {
                return handleJson(unCode)
            }
            return unCode
        } catch (err) {
            return ''
        }
    }
    return ''
}

/**
 * 深複製
 * @param {any} state 要複製的資料
 */
export const returnState = data => JSON.parse(JSON.stringify(data))

/******************* 計算公式 *******************/
/**
 * 初始單項數值 = ((等級 - 1) * 野生寵成長係數 + 初始能力係數) * 初始單項變數 / 100
 * @param {Number} lv 等級
 * @param {Number} GC 野生寵成長係數
 * @param {Number} IA 初始能力係數
 * @param {Number} ISI 初始單項變數
 */
export const getISV = ({ LV, GC, IA, ISI }) => ((LV - 1) * GC + IA) * ISI / 100

/**
 * 體力單項變數 = 體力成長檔 + a
 * 腕力單項變數 = 腕力成長檔 + b
 * 耐力單項變數 = 耐力成長檔 + c
 * 速度單項變數 = 速度成長檔 + d
 * @param {Number} GF 成長檔
 * @param {Number} V 隨機變數
 */
export const getSV = ({ GF, V }) => GF + V

/**
 * 血 = 體力 * 4 + 腕力 + 耐力 + 速度
 * @param {Number} V 隨機變數
 */
export const getHp = ([hp, atk, def, agi]) => 4 * hp + atk + def + agi

/**
 * 攻 = 體力 * 0.1 + 腕力 + 耐力 * 0.1 + 速度 * 0.05
 * @param {Number} V 隨機變數
 */
export const getAtk = ([hp, atk, def, agi]) => (hp + def) * 0.1 + atk + agi * 0.05

/**
 * 防 = 體力 * 0.1 + 腕力 * 0.1 + 耐力 + 速度 * 0.05
 * @param {Number} V 隨機變數
 */
export const getDef = ([hp, atk, def, agi]) => (hp + atk) * 0.1 + def + agi * 0.05

/**
 * 敏 = 速度
 * @param {Number} v 敏
 */
export const getAgi = ([hp, atk, def, agi]) => agi

export const calc = (GPF, GPFR, f) => {
    const base = GPF.map((v, i) => v + GPFR[i] + f[i])
    const health = base.map(ISI => getISV({ LV: 1, GC: 4, IA: 26, ISI }))
    const [hhp, hatk, hdef, hagi] = health
    const hp = getHp(health)
    const atk = getAtk(health)
    const def = getDef(health)
    const agi = getAgi(health)
    return {
        health: {
            hhp,
            hatk,
            hdef,
            hagi
        },
        fourWei: {
            hp,
            atk,
            def,
            agi
        }
    }
}

const combination = (arr) => {
    let results = []
    let result = []
    const doExchange = (arr, depth) => {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth !== arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push([...result])
            }
        }
    }
    doExchange(arr, 0)
    return results
}
const fileData = [2, 1, 0, -1, -2]
const fileDataArr = [
    fileData,
    fileData,
    fileData,
    fileData
]
export const fileArr = combination(fileDataArr)

const baseRandomFileData = [...Array(11).keys()]
const baseRandomFileDataArr = [
    baseRandomFileData,
    baseRandomFileData,
    baseRandomFileData,
    baseRandomFileData
]
export const randomFileArr = combination(baseRandomFileDataArr).filter(arr => (arr.reduce((a, b) => a + b)) === 10)
