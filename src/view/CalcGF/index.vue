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
                        初始四圍
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="FW"
                :PH="['生命', '攻擊', '防禦', '速度']"
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
            <Table 
                border 
                :columns="columns" 
                :data="data" 
                :loading="loading"
            />
        </Col>
    </Row>

  </div>
</template>
<script>
import { calc, calcAll } from '@UTIL'
import CalcInput from '@C/CalcInput'
export default {
    name: 'Home',
    data() {
        const health2 = {
            title: '四圍',
            align: 'center',
            children: [
                {
                    title: '體',
                    key: 'hp',
                    align: 'center'
                },
                {
                    title: '腕',
                    key: 'atk',
                    align: 'center'
                },
                {
                    title: '耐',
                    key: 'def',
                    align: 'center'
                },
                {
                    title: '速',
                    key: 'agi',
                    align: 'center'
                }
            ]
        }
        const health = {
            title: '隨機係數(10)',
            align: 'center',
            children: [
                {
                    title: '體',
                    key: 'ghp',
                    align: 'center'
                },
                {
                    title: '腕',
                    key: 'gatk',
                    align: 'center'
                },
                {
                    title: '耐',
                    key: 'gdef',
                    align: 'center'
                },
                {
                    title: '速',
                    key: 'gagi',
                    align: 'center'
                }
            ]
        }
        const fileLevel = {
            title: '檔次',
            align: 'center',
            children: [
                {
                    title: '體',
                    key: 'fhp',
                    align: 'center'
                },
                {
                    title: '腕',
                    key: 'fatk',
                    align: 'center'
                },
                {
                    title: '耐',
                    key: 'fdef',
                    align: 'center'
                },
                {
                    title: '速',
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
            loading: false,
            // GPF: [...arr], //[24, 38, 16, 20]
            GPF: [1, 22, 25, 23, 40, 6], //[24, 38, 16, 20]
            // GPF: [1, 26, 24, 38, 16, 20], //[24, 38, 16, 20]
            FW: [116, 20, 29, 5],
            // FW: [...arr],
            columns: [
                health2,
                health,
                fileLevel,
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
            // const a = +new Date()
            this.loading = true
            const key = this.GPF.join()
            let map = this.tempDate[key]
            if (!map) {
                this.tempDate[key] = map = await calcAll(this.GPF)
            }
            setTimeout(() => {
                this.data = map[this.FW.join()] ? [...map[this.FW.join()]] : []
                this.loading = false
            }, 50)
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
