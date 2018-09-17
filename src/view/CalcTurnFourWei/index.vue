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
                :PH="['轉前等級', '係數', '體', '腕', '耐', '速']"
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
                        type="info"
                        long
                    >
                        女寵餵食(0 ~ 50)
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="gf"
                :PH="['體', '腕', '耐', '速']"
            />
            <Row>
                <Col span="24">
                    <Button
                        type="info"
                        long
                    >
                        1轉隨機檔次(-2 ~ +2)
                    </Button>
                </Col>
            </Row>
            <CalcInput
                :v="tf"
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
import { calcT, getFV, getTP, setStorage, getStorage, b64EncodeUnicode, b64DecodeUnicode } from '@UTIL'
import petData from '@UTIL/petData'
import CalcInput from '@C/CalcInput'
export default {
    name: 'Home',
    data() {
        const storage = getStorage('CalcTurnFourWei') || []
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
            title: 'Lv1 四圍',
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
                }
            ]
        }
        const tGpf = {
            title: '轉後成長檔',
            align: 'center',
            className: 'color1',
            children: [
                {
                    title: '體',
                    key: 'chp',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '腕',
                    key: 'catk',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '耐',
                    key: 'cdef',
                    align: 'center',
                    className: 'color1'
                },
                {
                    title: '速',
                    key: 'cagi',
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
        const fullFourWei = {
            title: 'Lv140 四圍',
            align: 'center',
            className: 'color5',
            children: [
                {
                    title: '血',
                    key: 'ffhp',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '攻',
                    key: 'ffatk',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '防',
                    key: 'ffdef',
                    align: 'center',
                    className: 'color5'
                },
                {
                    title: '敏',
                    key: 'ffagi',
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
            GPF: [130, '', ...arr], //[24, 38, 16, 20]
            GPFR: [3, 3, 2, 2], //[1, 3, 3, 3]
            f: [...arr],
            gf: [...arr.map(() => 50)], //[50, 50, 50, 50]
            tf: [...arr],
            FV: null,
            columns: [
                // health,
                ininFourWei,
                tGpf,
                gRate,
                fullFourWei
            ],
            data: [
            ],
            storage
        }
    },
    mounted() {
        try {
            let {GPF, GPFR, name, f, gf, tf} = JSON.parse(b64DecodeUnicode(this.$route.query.search))
            this.GPF = GPF
            this.GPFR = GPFR
            this.name = name
            this.f = f
            this.gf = gf
            this.tf = tf
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
            const { fourWei: [fhp, fatk, fdef, fagi], health, gRate, tGpf: [chp, catk, cdef, cagi], fullFourWei } = calcT(this)
            const search = b64EncodeUnicode(JSON.stringify({GPF: this.GPF, f: this.f, GPFR: this.GPFR, name: this.name, gf: this.gf, tf: this.tf}))
            this.$router.push({ path: '', query: { search }})
            this.data = [{
                fhp,
                fatk,
                fdef,
                fagi,
                ...health,
                ...gRate,
                chp, 
                catk, 
                cdef, 
                cagi,
                ...fullFourWei
            }]
            if (isStorage) {
                const GPFR = [...this.GPFR]
                const GPF = [...this.GPF]
                const f = [...this.f]
                const gf = [...this.gf]
                const tf = [...this.tf]
                const name = this.name
                this.storage.unshift({ name, GPFR, GPF, f, gf, tf })
                this.storage.length > 11 && this.storage.pop()
                setStorage('CalcTurnFourWei', this.storage)
            }
        },
        handleRecodeCalc(i) {
            const { GPFR, GPF, f, name, tf, gf } = this.storage[i]
            this.name = name
            this.GPF = [...GPF]
            this.GPFR = [...GPFR]
            this.f = [...f]
            this.gf = [...gf]
            this.tf = [...tf]
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
