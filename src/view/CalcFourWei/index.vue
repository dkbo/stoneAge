<template>
    <div class="container">
    <Row>
        <Col span="12">
            <Row>
                <Col span="8">
                    <Button
                        type="info"
                        long
                    >
                        基礎素質
                    </Button>
                </Col>
                <Col span="8">
                    <Select
                        v-model="name2"
                        @input="handleChange"
                        filterable
                        long
                    >
                        <OptionGroup v-for="(petCate, i) in petData" :label="petCate.name" :key="petCate.name">
                            <Option  v-for="(pet, j) in petCate.arr" :value="`${i}.${j}`" :key="pet.name" :label="pet.name" />
                        </OptionGroup>
                    </Select>
                </Col>
                <Col span="8">
                    <Input v-model="name" placeholder="寵物名稱" />
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
                        初始隨機(相加總合10)
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
                        隨機檔次(-2 ~ +2)
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
            <Button
                type="ghost"
                long
                @click="handleRecodeCalc(i)"
                v-for="({name, GPF, GPFR, f}, i) in storage"
                icon="ios-search"
                :key="i"
            >
                {{`${name} ${GPF.join()}|${GPFR.join()}|${f.join()}`}}
            </Button>
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
import { calc, getFV, setStorage, getStorage, b64EncodeUnicode, b64DecodeUnicode } from '@UTIL'
import petData from '@UTIL/petData'
import CalcInput from '@C/CalcInput'
export default {
    name: 'Home',
    data() {
        const storage = getStorage('CalcFourWei') || []
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
            className: 'color1',
            children: [
                {
                    title: '血',
                    key: 'fhp',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '攻',
                    key: 'fatk',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '防',
                    key: 'fdef',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '敏',
                    key: 'fagi',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '戰',
                    key: 'fscore',
                    align: 'center',
                    className: 'color1'
                }
            ]
        }
        const gRate = {
            title: '成長率',
            align: 'center',
            className: 'color5',
            children: [
                {
                    title: '血',
                    key: 'vhp',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '攻',
                    key: 'vatk',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '防',
                    key: 'vdef',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '敏',
                    key: 'vagi',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '成長',
                    key: 'vSum',
                    align: 'center',
                    className: 'color5'
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
            petData,
            name: '',
            name2: '',
            GPF: ['', '', ...arr], //[24, 38, 16, 20]
            GPFR: [3, 3, 2, 2],
            f: [...arr],
            FV: null,
            columns: [
                // health,
                ininFourWei,
                gRate
            ],
            data: [
            ],
            storage
        }
    },
    mounted() {
        try {
            let {GPF, GPFR, name, f} = JSON.parse(b64DecodeUnicode(this.$route.query.search))
            this.GPF = GPF
            this.GPFR = GPFR
            this.name = name
            this.f = f
            this.handleCalc(false)
        } catch (err) {

        }
    },
    computed: {
    },
    methods: {
        handleChange(v) {
            const [i, j] = v.split('.')
            const { name, GPF } = petData[i].arr[j]
            this.GPF = [this.GPF[0], ...GPF]
            this.name = name
        },
        handleCalc(isStorage = true) {
            const [a, b, ...gpf] = this.GPF
            this.FV = getFV(gpf).m
            const { fourWei: [fhp, fatk, fdef, fagi, fscore], health, gRate } = calc(this)
            const search = b64EncodeUnicode(JSON.stringify({GPF: this.GPF, f: this.f, GPFR: this.GPFR, name: this.name}))
            this.$router.push({ path: '', query: { search }})
            this.data = [{
                fhp,
                fatk,
                fdef,
                fagi,
                fscore,
                ...health,
                ...gRate
            }]
            if (isStorage) {
                const GPFR = [...this.GPFR]
                const GPF = [...this.GPF]
                const f = [...this.f]
                const name = this.name
                this.storage.unshift({ name, GPFR, GPF, f })
                this.storage.length > 7 && this.storage.pop()
                setStorage('CalcFourWei', this.storage)
            }
        },
        handleRecodeCalc(i) {
            const { GPFR, GPF, f, name } = this.storage[i]
            this.name = name
            this.GPF = [...GPF]
            this.GPFR = [...GPFR]
            this.f = [...f]
            this.handleCalc(false)
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
