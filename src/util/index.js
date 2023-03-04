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
export const getCookie = cname => {
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
export const handleJson = string => {
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
export const getISV = ({ LV, GC, IA, ISI }) => (((LV - 1) * GC + IA) * ISI) / 100

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
export const getAGV = ({ ISI, ISR = 2.5, FV }) => ((((ISI + ISR) * FV) / 100).toFixed(3) * 100) / 100

/**
 * 平均轉後單項檔=(轉生增幅係數+轉前總成長檔)*(50+4*單項檔)/(150+4*轉前總成長檔)....(無條件去小數點)
 * @param {Number} ISI 單項成長檔
 * @param {Number} ISR 單項隨機成長變數
 * @param {Number} FV 隨機檔次補正係數
 */
export const getTP = (av, p, s, sumP, sumGf) => {
  // console.log(av, p, s, sumP, sumGf)
  // console.log(~~(Math.min(a + sumP, 150) * (s + 4 * p) / (150 + 4 * sumP)))
  return ~~((Math.min(av + sumP, 150) * (s + 4 * p)) / (sumGf + 4 * sumP))
}

export const getFullLevel = (init, g) => ~~(init + g * 139)

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
    l: 4.5,
  },
  {
    h: 5.2,
    m: 4.95,
    l: 4.7,
  },
  {
    h: 5.4,
    m: 5.15,
    l: 4.9,
  },
  {
    h: 5.6,
    m: 5.35,
    l: 5.1,
  },
  {
    h: 5.8,
    m: 5.55,
    l: 5.3,
  },
  {
    h: 6.0,
    m: 5.75,
    l: 5.5,
  },
]
/**
 * 檔次補正係數
 */
export const getFV = gpf => {
  const val = gpf.reduce((a, b) => a + b)
  if (val >= 100) {
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

// (4.75(當寵物平均總成長檔不低於100；或轉生後的寵物總成長檔不低於130)
// 4.95(當寵物平均總成長檔在95~99間；或轉生後的寵物總成長檔在100~129間)
// 5.15(當寵物平均總成長檔在90~94間；或轉生後的寵物總成長檔在95~99間)
// 5.35(當寵物平均總成長檔或轉生後的寵物總成長檔在在85~89間)
// 5.55(當寵物平均總成長檔或轉生後的寵物總成長檔在在80~84間)
// 5.75(當寵物平均總成長檔或轉生後的寵物總成長檔小於80)
/**
 * 1轉檔次補正係數
 */
export const getTFV = gpf => {
  const val = gpf.reduce((a, b) => a + b)
  if (val >= 130) {
    return FV[0]
  } else if (val >= 100) {
    return FV[1]
  } else if (val >= 95) {
    return FV[2]
  } else if (val >= 85) {
    return FV[3]
  } else if (val >= 80) {
    return FV[4]
  } else {
    return FV[5]
  }
}

const getRank = {
  4.75: 0,
  4.95: 1,
  5.15: 2,
  5.35: 3,
  5.55: 4,
  5.75: 5,
}
export const calc = ({ GC = 4, GPF, GPFR, f, FV }) => {
  const [LV, IA, ...gpf] = GPF
  const base = gpf.map((v, i) => v + GPFR[i] + f[i])
  const health = base.map(ISI => getISV({ LV, GC, IA, ISI }))
  const gRate = gpf.map((v, i) => getAGV({ ISI: v + f[i], FV }))
  const hp = +getHp(health).toFixed(2)
  const atk = +getAtk(health).toFixed(2)
  const def = +getDef(health).toFixed(2)
  const agi = +getAgi(health).toFixed(2)
  const score = ~~(~~hp / 4) + ~~atk + ~~def + ~~agi
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
      hagi: health[3],
    },
    fourWei: [hp, atk, def, agi, score],
    gRate: {
      vhp,
      vatk,
      vdef,
      vagi,
      vSum,
    },
  }
}
export const calcT = ({ GC = 4, GPF, GPFR, f, gf, tf, FV }) => {
  const [LV, IA, ...gpf] = GPF
  const sumP = [...gpf, ...f].reduce((a, b) => a + b)
  const sumGf = Math.min(
    gf.reduce((a, b) => a + b),
    150
  )
  // 增幅係數
  const total = ~~(Math.max(~~Math.pow(sumGf / 100, 5), 0) * 1.3)
  const rank = getRank[FV]
  const fix = (5 - rank) * 1.2 + 5
  const av = total + ~~((LV - 100) / fix)
  // 增幅係數
  const cHp = getTP(av, gpf[0] + f[0], gf[0], sumP, sumGf)
  const cAtk = getTP(av, gpf[1] + f[1], gf[1], sumP, sumGf)
  const cDef = getTP(av, gpf[2] + f[2], gf[2], sumP, sumGf)
  const cAgi = getTP(av, gpf[3] + f[3], gf[3], sumP, sumGf)
  const tGpf = [cHp, cAtk, cDef, cAgi]
  const base = tGpf.map((v, i) => v + GPFR[i] + +tf[i])
  const TFV = getTFV(tGpf.map((v, i) => v + +tf[i])).m
  const health = base.map(ISI => getISV({ LV: 1, GC, IA, ISI }))
  const gRate = tGpf.map((v, i) => getAGV({ ISI: v + tf[i], FV: TFV }))
  const hp = +getHp(health).toFixed(2)
  const atk = +getAtk(health).toFixed(2)
  const def = +getDef(health).toFixed(2)
  const agi = +getAgi(health).toFixed(2)
  const score = ~~(~~hp / 4) + ~~atk + ~~def + ~~agi
  const vhp = +getHp(gRate).toFixed(4)
  const vatk = +getAtk(gRate).toFixed(4)
  const vdef = +getDef(gRate).toFixed(4)
  const vagi = +getAgi(gRate).toFixed(4)
  const vSum = +(vatk + vdef + vagi).toFixed(4)
  const ffhp = getFullLevel(+hp, +vhp)
  const ffatk = getFullLevel(+atk, +vatk)
  const ffdef = getFullLevel(+def, +vdef)
  const ffagi = getFullLevel(+agi, +vagi)
  const ffscore = ~~(ffhp / 4) + ffatk + ffdef + ffagi
  return {
    health: {
      hhp: health[0],
      hatk: health[1],
      hdef: health[2],
      hagi: health[3],
    },
    fourWei: [hp, atk, def, agi, score],
    tGpf,
    gRate: {
      vhp,
      vatk,
      vdef,
      vagi,
      vSum,
    },
    fullFourWei: {
      ffhp,
      ffatk,
      ffdef,
      ffagi,
      ffscore,
    },
  }
}
const combination = arr => {
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
const fileDataArr = [fileData, fileData, fileData, fileData]
const fileArr = combination(fileDataArr)

const baseRandomFileData = [...Array(11).keys()]
const baseRandomFileDataArr = [baseRandomFileData, baseRandomFileData, baseRandomFileData, baseRandomFileData]
const randomFileArr = combination(baseRandomFileDataArr).filter(arr => arr.reduce((a, b) => a + b) === 10)

export const calcAll = GPF =>
  new Promise(resolve => {
    let map = {}
    const [a, b, ...gpf] = GPF
    const FV = getFV(gpf).m
    setTimeout(() => {
      fileArr.forEach(([fhp, fatk, fdef, fagi]) => {
        randomFileArr.forEach(([ghp, gatk, gdef, gagi]) => {
          const {
            fourWei: [hp, atk, def, agi, score],
            health,
            gRate,
          } = calc({
            GPF,
            GPFR: [ghp, gatk, gdef, gagi],
            f: [fhp, fatk, fdef, fagi],
            FV,
          })
          const data = {
            hp,
            atk,
            def,
            agi,
            score,
            ghp,
            gatk,
            gdef,
            gagi,
            fhp,
            fatk,
            fdef,
            fagi,
            ...health,
            ...gRate,
          }
          const key = `${~~hp},${~~atk},${~~def},${~~agi}`
          map[key] ? map[key].push(data) : (map[key] = [data])
        })
      })
      resolve(map)
    }, 50)
  })

//     vitalP = (1.1 * hpP - attackP - defendP - speedP) / 4.2;
// strP = (10 * attackP - defendP - 0.9 * vitalP - 0.45 * speedP) / 9.9;
// tghP = (10 * defendP - attackP - 0.9 * vitalP - 0.45 * speedP) / 9.9;
// dexP = speedP;
const hpP = ([hp, atk, def, agi]) => (1.1 * hp - atk - def - agi) / 4.2
const atkP = ([hp, atk, def, agi, hpP]) => (10 * atk - def - 0.9 * hpP - 0.45 * agi) / 9.9
const defP = ([hp, atk, def, agi, hpP]) => (10 * def - atk - 0.9 * hpP - 0.45 * agi) / 9.9
const agiP = ([hp, atk, def, agi]) => agi
// 單項成長檔=100*單項成長率/檔次補正係數-2.5
const PF = (P, m) => Math.round((100 * P) / m - 2.5, 0)
export const calcP = ({ P }) => {
  const hpPF = hpP(P)
  const atkPF = atkP([...P, hpPF])
  const defPF = defP([...P, hpPF])
  const agiPF = agiP(P)
  let gpf = []
  FV.forEach(({ m }) => {
    const hp = PF(hpPF, m) - 2
    const atk = PF(atkPF, m) - 2
    const def = PF(defPF, m) - 2
    const agi = PF(agiPF, m) - 2
    const calcGpf = [hp, atk, def, agi]
    if (getFV(calcGpf).m === m) {
      gpf.push({
        hp,
        atk,
        def,
        agi,
        m,
      })
      return true
    } else {
      return false
    }
  })
  return gpf
}
// =(((lv-1)*4+b)*(gpfS+G7) / 100 - 20) / 4
export const calcPostive = GPF => {
  let arr = []
  const [lv = '', b, ...gpf] = GPF
  const lvArr = (lv + '').split('.')
  const gpfS = gpf.reduce((a, b) => a + b) + 10
  for (let i = 1; i <= 140; i++) {
    let map = {}
    ;[...Array(17)]
      .map((k, l) => 8 - l)
      .forEach(n => {
        map[`c${n}`] = ~~(((((i - 1) * 4 + b) * (gpfS + n)) / 100 - 20) / 4).strip()
      })
    map.lv = i
    arr.push(map)
  }
  if (lv) {
    console.log(lvArr)
    arr = arr.filter(({ lv }) => lvArr.find(v => +v === +lv))
  }
  return arr
}
