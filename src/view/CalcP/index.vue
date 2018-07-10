<template>
    <div class="container">
    <Row>
        <Col span="12">
            <Row>
                <Col span="16">
                    <Button
                        type="info"
                        long
                    >
                        基礎素質
                    </Button>
                </Col>
                <Col span="8">
                    <Input v-model="name" placeholder="寵物名稱" />
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <Button
                        type="info"
                        long
                    >
                        成長率
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="P"
                :PH="['生命成長率', '攻擊成長率', '防禦成長率', '速度成長率']"
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
            <Button
                type="ghost"
                long
                icon="ios-search"
                @click="handleRecodeCalc(i)"
                v-for="({GPF, FW, name}, i) in storage"
                :key="i"
            >
                {{`${name} ${P.join()}`}}
            </Button>
        </Col>
    </Row>
    <Row>
        <Col span="24">
            <Table
                border
                :columns="columns"
                :data="pageData"
            />
        </Col>
    </Row>

  </div>
</template>
<script>
import { calcP, setStorage, getStorage, b64EncodeUnicode, b64DecodeUnicode } from '@UTIL'
import CalcInput from '@C/CalcInput'
export default {
    name: 'Home',
    data() {
        const storage = getStorage('CalcP') || []
        const health = {
            title: '成長檔',
            align: 'center',
            className: 'color1',
            children: [
                {
                    title: '體',
                    key: 'hp',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '腕',
                    key: 'atk',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '耐',
                    key: 'def',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '速',
                    key: 'agi',
                    align: 'center',
                    className: 'color1'
                }
            ]
        }
        const arr = ['', '', '', '']
        return {
            name: '',
            P: [...arr],
            columns: [
                health
            ],
            data: [],
            storage
        }
    },
    mounted() {
        try {
            let {P} = JSON.parse(b64DecodeUnicode(this.$route.query.search))
            this.P = P
            this.handleCalc(false)
        } catch (err) {

        }
    },
    computed: {
    },
    methods: {
        handleChange(i) {
            const { name, GPF } = petData[i]
            this.GPF = [this.GPF[0], ...GPF]
            this.name = name
        },
        async handleCalc(isStorage = true) {
            const P = [...this.P]
            const name = this.name
            const search = b64EncodeUnicode(JSON.stringify({P, name}))
            this.$router.push({ path: 'CalcP', query: { search }})
            const files = calcP(this)
            this.data = [files]
            if (isStorage) {
                this.storage.unshift({ name, P })
                this.storage.length > 4 && this.storage.pop()
                setStorage('CalcP', this.storage)
            }
        },
        handleRecodeCalc(i) {
            const { GPF, FW, name } = this.storage[i]
            this.name = name
            this.GPF = [...GPF]
            this.FW = [...FW]
            this.handleCalc(false)
        },
        handleChangePage(v) {
            this.pageIndex = v
            this.pageData = [...this.data.slice((v - 1) * 30, 30 * v)]

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
