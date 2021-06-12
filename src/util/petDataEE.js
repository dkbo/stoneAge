const petData = [
    {
        name: '馬年獸系',
        arr: [
            {
                name: '葛雷基歐',
                GPF: [39, 24, 40, 27, 22]
            },
            {
                name: '葛雷洛比',
                GPF: [39, 27, 40, 24, 22]
            },
            {
                name: '葛雷吉魯',
                GPF: [39, 24, 44, 24, 22]
            },
            {
                name: '葛雷馬恩',
                GPF: [39, 23, 40, 22, 30]
            }
        ]
    },
    {
        name: '老虎系',
        arr: [
            {
                name: '貝魯卡',
                GPF: [24, 23, 28, 16, 25]
            },
            {
                name: '貝魯伊卡',
                GPF: [23, 21, 30, 13, 28]
            },
            {
                name: '格魯西斯',
                GPF: [21, 20, 30, 13, 28]
            },
            {
                name: '金格薩貝魯',
                GPF: [25, 19, 29, 18, 29]
            }
        ]
    },
    {
        name: '雷龍系',
        arr: [
            {
                name: '布洛多斯',
                GPF: [25, 37, 27, 33, 6]
            },
            {
                name: '布林帖斯',
                GPF: [26, 40, 23, 32, 7]
            },
            {
                name: '布拉奇多斯',
                GPF: [24, 35, 35, 28, 6]
            },
            {
                name: '斯天多斯',
                GPF: [28, 40, 25, 35, 5]
            },
            {
                name: '邦恩多斯',
                GPF: [28, 37, 30, 27, 10]
            }
        ]
    },
    {
        name: '暴龍系',
        arr: [
            {
                name: '奧卡洛斯',
                GPF: [25, 26, 34, 28, 19]
            },
            {
                name: '左迪洛斯',
                GPF: [26, 28, 30, 22, 22]
            },
            {
                name: '巴朵蘭恩',
                GPF: [27, 23, 37, 20, 25]
            },
            {
                name: '帖拉所伊朵',
                GPF: [28, 23, 35, 25, 21]
            }
        ]
    },
    {
        name: '人龍系',
        arr: [
            {
                name: '利則諾頓',
                GPF: [22, 27, 37, 19, 17]
            },
            {
                name: '揚奇洛斯',
                GPF: [29, 28, 39, 16, 21]
            },
            {
                name: '邦奇諾',
                GPF: [26, 24, 39, 16, 20]
            },
            {
                name: '布魯頓',
                GPF: [25, 25, 39, 14, 26]
            }
        ]
    },
    {
        name: '2D人龍系',
        arr: [
            {
                name: '2D揚奇洛斯',
                GPF: [32, 28, 42, 18, 25]
            },
            {
                name: '2D布魯頓',
                GPF: [26, 26, 41, 17, 29]
            },
            {
                name: '2D利則諾頓',
                GPF: [26, 26, 41, 22, 22]
            },
            {
                name: '2D邦奇洛',
                GPF: [26, 25, 43, 20, 23]
            }
        ]
    },
    {
        name: '鯊魚系',
        arr: [
            {
                name: '加格',
                GPF: [23, 30, 36, 15, 19]
            }
        ]
    },
    {
        name: '犀牛系',
        arr: [
            {
                name: '多洛布斯',
                GPF: [14, 26, 38, 26, 18]
            },
            {
                name: '貝恩達斯',
                GPF: [16, 30, 35, 26, 14]
            },
            {
                name: '多利諾布斯',
                GPF: [12, 27, 37, 25, 16]
            }
        ]
    },
    {
        name: '鴕鳥系',
        arr: [
            {
                name: '克克洛斯',
                GPF: [20, 20, 34, 12, 36]
            },
            {
                name: '奇寶',
                GPF: [20, 20, 36, 14, 34]
            }
        ]
    },
    {
        name: '水龍系',
        arr: [
            {
                name: '蘭貝魯斯',
                GPF: [21, 26, 37, 21, 21]
            }
        ]
    },
    {
        name: '飛龍系',
        arr: [
            {
                name: '朵拉比斯',
                GPF: [23, 22, 36, 18, 28]
            }
        ]
    },
    {
        name: '威威系',
        arr: [
            {
                name: '威威',
                GPF: [15, 21, 36, 10, 33]
            },
            {
                name: '烏卡魯',
                GPF: [13, 25, 35, 11, 29]
            },
            {
                name: '烏寶寶',
                GPF: [15, 20, 35, 12, 34]
            },
            {
                name: '威伯',
                GPF: [20, 20, 35, 16, 29]
            }
        ]
    },
    {
        name: '拳王系',
        arr: [
            {
                name: '柏克爾',
                GPF: [20, 23, 38, 22, 24]
            }
        ]
    },
    {
        name: '跳狗系',
        arr: [
            {
                name: '拉奇魯哥',
                GPF: [23, 24, 39, 15, 22]
            },
            {
                name: '魯尼帖斯',
                GPF: [22, 27, 37, 16, 20]
            }
        ]
    },
    {
        name: '烏龜系',
        arr: [
            {
                name: '石龜',
                GPF: [20, 27, 23, 48, 5]
            }
        ]
    },
    {
        name: '穿山甲系',
        arr: [
            {
                name: '卡達魯卡斯',
                GPF: [22, 25, 23, 40, 6]
            }
        ]
    },
    {
        name: '海主人系',
        arr: [
            {
                name: '邦奇',
                GPF: [22, 32, 37, 24, 13]
            },
            {
                name: '姆伊',
                GPF: [20, 35, 35, 22, 13]
            },
            {
                name: '海主人',
                GPF: [21, 31, 35, 26, 14]
            },
            {
                name: '多魯寶',
                GPF: [24, 30, 38, 24, 14]
            }
        ]
    },
    {
        name: '加美系',
        arr: [
            {
                name: '邦奇',
                GPF: [18, 20, 37, 13, 34]
            }
        ]
    }
]
export default petData