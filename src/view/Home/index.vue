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
            <FourInput
                :v="GPF"
                :PH="['體', '腕', '耐', '速']"
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
            <FourInput
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
            <FourInput
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
import { calc } from '@UTIL'
import FourInput from '@C/FourInput'
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
                    key: 'hp',
                    align: 'center'
                },
                {
                    title: '攻',
                    key: 'atk',
                    align: 'center'
                },
                {
                    title: '防',
                    key: 'def',
                    align: 'center'
                },
                {
                    title: '敏',
                    key: 'agi',
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
            GPF: [...arr], //[24, 38, 16, 20]
            GPFR: [...arr], //[1, 3, 3, 3]
            f: [...arr],
            columns: [
                health,
                ininFourWei
            ],
            data: [
            ]
        }
    },
    computed: {
    },
    methods: {
        handleCalc() {
            const { fourWei, health } = calc(this.GPF, this.GPFR, this.f)
            this.data.push({
                ...fourWei,
                ...health
            })
        }
    },
    components: {
        FourInput
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
