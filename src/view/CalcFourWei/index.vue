<template>
    <div class="container">
    <Row>
        <Col span="12">
            <Row>
                <Col span="24">
                    <Button
                        type="success"
                        icon="ios-search"
                        long
                    >
                        基礎素質
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="GPF"
                :PH="['等級', '係數', '體', '腕', '耐', '速']"
            />
            <Row>
                <Col span="24">
                    <Button
                        type="info"
                        long
                    >
                        初始隨機(10)
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="GPFR"
                :PH="['檔次體', '檔次腕', '檔次耐', '檔次速']"
            />
            <Row>
                <Col span="24">
                    <Button
                        type="info"
                        long
                    >
                        隨機成長檔次
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="f"
                :PH="['檔次體', '檔次腕', '檔次耐', '檔次速']"
            />
            <Row>
                <Col span="24">
                    <Button
                        type="success"
                        long
                        icon="ios-search"
                        @click="handleCalc"
                    >
                        計算
                    </Button>
                </Col>
            </Row>
        </Col>
        <Col span="12">

        </Col>
    </Row>
    <Row>
        <Col span="24">
            <Table border :columns="columns" :data="data" />
        </Col>
    </Row>

  </div>
</template>
<script>
import { calc, getFV } from '@UTIL'
import CalcInput from '@C/CalcInput'
export default {
    name: 'Home',
    data() {
        const health = {
            title: '健康檢查',
            align: 'center',
            children: [
                {
                    title: '體',
                    key: 'hhp',
                    align: 'center'
                },
                {
                    title: '腕',
                    key: 'hatk',
                    align: 'center'
                },
                {
                    title: '耐',
                    key: 'hdef',
                    align: 'center'
                },
                {
                    title: '速',
                    key: 'hagi',
                    align: 'center'
                }
            ]
        }
        const ininFourWei = {
            title: '四圍',
            align: 'center',
            children: [
                {
                    title: '血',
                    key: 'fhp',
                    align: 'center'
                },
                {
                    title: '攻',
                    key: 'fatk',
                    align: 'center'
                },
                {
                    title: '防',
                    key: 'fdef',
                    align: 'center'
                },
                {
                    title: '敏',
                    key: 'fagi',
                    align: 'center'
                }
            ]
        }
        const gRate = {
            title: '成長率',
            align: 'center',
            children: [
                {
                    title: '血',
                    key: 'vhp',
                    align: 'center'
                },
                {
                    title: '攻',
                    key: 'vatk',
                    align: 'center'
                },
                {
                    title: '防',
                    key: 'vdef',
                    align: 'center'
                },
                {
                    title: '敏',
                    key: 'vagi',
                    align: 'center'
                },
                {
                    title: '成長',
                    key: 'vSum',
                    align: 'center'
                }
            ]
        }
        const arr = [
            '',
            '',
            '',
            ''
        ]
        return {
            // GPF: [...arr], //[24, 38, 16, 20]
            GPF: [1, 26, 24, 38, 16, 20], //[24, 38, 16, 20]
            // GPFR: [...arr], //[1, 3, 3, 3]
            GPFR: [1, 3, 3, 3], //[1, 3, 3, 3]
            f: [...arr],
            FV: null,
            columns: [
                health,
                ininFourWei,
                gRate
            ],
            data: [
            ]
        }
    },
    computed: {
    },
    methods: {
        async handleCalc() {
            const [a, b, ...gpf] = this.GPF
            this.FV = getFV(gpf).m
            const { fourWei: [fhp, fatk, fdef, fagi], health, gRate } = calc(this)
            this.data = [{
                fhp,
                fatk,
                fdef,
                fagi,
                ...health,
                ...gRate
            }]
        }
    },
    components: {
        CalcInput
    }
}
</script>
<style scoped>
.container{
  /* border: 1px solid #d7dde4; */
  // background: #f5f7f9;
  // position: relative;
  // border-radius: 4px;
  // overflow: hidden;
}
</style>
