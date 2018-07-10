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
let tempISV = {}
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
 * 平均單項成長率 = (單項成長檔 + 單項隨機成長變數) * 隨機檔次補正係數 / 100
 * @param {Number} ISI 單項成長檔
 * @param {Number} ISR 單項隨機成長變數
 * @param {Number} FV 隨機檔次補正係數
 */
export const getAGV = ({ ISI, ISR = 2.5, FV }) => ~~(((ISI + ISR) * FV / 100).toFixed(3) * 100) / 100

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
/**
 * 檔次補正係數
 */
const FV = [
    {
        h: 5.0,
        m: 4.75,
        l: 4.5
    },
    {
        h: 5.2,
        m: 4.95,
        l: 4.7
    },
    {
        h: 5.4,
        m: 5.15,
        l: 4.9
    },
    {
        h: 5.6,
        m: 5.35,
        l: 5.1
    },
    {
        h: 5.8,
        m: 5.55,
        l: 5.3
    },
    {
        h: 6.0,
        m: 5.75,
        l: 5.5
    }
]
/**
 * 檔次補正係數
 */
export const getFV = (gpf) => {
    const val = gpf.reduce((a, b) => a + b)
    if (val > 100) {
        return FV[0]
    } else if (val >= 95) {
        return FV[1]
    } else if (val >= 90) {
        return FV[2]
    } else if (val >= 85) {
        return FV[3]
    } else if (val >= 80) {
        return FV[4]
    } else {
        return FV[5]
    }
}

export const calc = ({ GC = 4, GPF, GPFR, f, FV }) => {
    const [LV, IA, ...gpf] = GPF
    const base = gpf.map((v, i) => v + GPFR[i] + f[i])
    const health = base.map(ISI => getISV({ LV, GC, IA, ISI }))
    const gRate = gpf.map((v, i) => getAGV({ISI: v + f[i], FV}))
    const hp = +getHp(health).toFixed(2)
    const atk = +getAtk(health).toFixed(2)
    const def = +getDef(health).toFixed(2)
    const agi = +getAgi(health).toFixed(2)
    const vhp = +getHp(gRate).toFixed(4)
    const vatk = +getAtk(gRate).toFixed(4)
    const vdef = +getDef(gRate).toFixed(4)
    const vagi = +getAgi(gRate).toFixed(4)
    const vSum = +(vatk + vdef + vagi).toFixed(4)
    return {
        health: {
            hhp: health[0],
            hatk: health[1],
            hdef: health[2],
            hagi: health[3]
        },
        fourWei: [
            hp,
            atk,
            def,
            agi
        ],
        gRate: {
            vhp,
            vatk,
            vdef,
            vagi,
            vSum
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
const fileData = [-2, -1, 0, 1, 2]
const fileDataArr = [
    fileData,
    fileData,
    fileData,
    fileData
]
const fileArr = combination(fileDataArr)

const baseRandomFileData = [...Array(11).keys()]
const baseRandomFileDataArr = [
    baseRandomFileData,
    baseRandomFileData,
    baseRandomFileData,
    baseRandomFileData
]
const randomFileArr = combination(baseRandomFileDataArr).filter(arr => (arr.reduce((a, b) => a + b)) === 10)

export const calcAll = (GPF) =>
    new Promise((resolve) => {
        let map = {}
        const [a, b, ...gpf] = GPF
        const FV = getFV(gpf).m
        setTimeout(() => {
            fileArr.forEach(([fhp, fatk, fdef, fagi]) => {
                randomFileArr.forEach(([ghp, gatk, gdef, gagi]) => {
                    const { fourWei: [hp, atk, def, agi], health, gRate } = calc({
                        GPF,
                        GPFR: [ghp, gatk, gdef, gagi],
                        f: [fhp, fatk, fdef, fagi],
                        FV
                    })
                    const data = {
                        hp,
                        atk,
                        def,
                        agi,
                        ghp,
                        gatk,
                        gdef,
                        gagi,
                        fhp,
                        fatk,
                        fdef,
                        fagi,
                        ...health,
                        ...gRate
                    }
                    const key = `${~~hp},${~~atk},${~~def},${~~agi}`
                    map[key] ? map[key].push(data) : (map[key] = [data])
                })
            })
            resolve(map)
        }, 50)
    })

    // vitalP = (1.1 * hpP - attackP - defendP - speedP) / 4.2;
    // strP = (10 * attackP - defendP - 0.9 * vitalP - 0.45 * speedP) / 9.9;
    // tghP = (10 * defendP - attackP - 0.9 * vitalP - 0.45 * speedP) / 9.9;
    // dexP = speedP;
    // (vitalP,strP,tghP,dexP分別代表體力、腕力、耐力、速度成長率）
    // (hpP,attackP,defendP,speedP分別代表血攻防敏成長率）
    // 得到各項內在成長率以後，即可進一步轉換為各項成長檔：
    // 單項成長檔=100*單項成長率/檔次補正係數-2.5

export const calcP = () => {

}