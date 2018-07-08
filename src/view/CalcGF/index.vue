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
                        <Option v-for="(pet, i) in petData" :value="i" :key="pet.name" :label="pet.name" />
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
            <Button
                type="ghost"
                long
                icon="ios-search"
                @click="handleRecodeCalc(i)"
                v-for="({GPF, FW, name}, i) in storage"
                :key="i"
            >
                {{`${name} ${GPF.join()}|${FW.join()}`}}
            </Button>
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
import { calc, calcAll, setStorage, getStorage } from '@UTIL'
import petData from '@UTIL/petData'
import CalcInput from '@C/CalcInput'
export default {
    name: 'Home',
    data() {
        const storage = getStorage('CalcGF') || []
        const health2 = {
            title: '四圍',
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
        const health = {
            title: '隨機係數(10)',
            align: 'center',
            className: 'color2',
            children: [
                {
                    title: '體',
                    key: 'ghp',
                    align: 'center',
                    className: 'color2'
                },
                {
                    title: '腕',
                    key: 'gatk',
                    align: 'center',
                    className: 'color2'
                },
                {
                    title: '耐',
                    key: 'gdef',
                    align: 'center',
                    className: 'color2'
                },
                {
                    title: '速',
                    key: 'gagi',
                    align: 'center',
                    className: 'color2'
                }
            ]
        }
        const fileLevel = {
            title: '檔次',
            align: 'center',
            className: 'color3',
            children: [
                {
                    title: '體',
                    key: 'fhp',
                    align: 'center',
                    className: 'color3'
                },
                {
                    title: '腕',
                    key: 'fatk',
                    align: 'center',
                    className: 'color3'
                },
                {
                    title: '耐',
                    key: 'fdef',
                    align: 'center',
                    className: 'color3'
                },
                {
                    title: '速',
                    key: 'fagi',
                    align: 'center',
                    className: 'color3'
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
            loading: false,
            name: '',
            name2: '',
            GPF: ['', '', ...arr],
            FW: [...arr],
            petData,
            columns: [
                health2,
                health,
                fileLevel,
                gRate
            ],
            data: [
            ],
            storage
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
            // const a = +new Date()
            this.loading = true
            const GPF = [...this.GPF]
            const FW = [...this.FW]
            const name = this.name
            const key = GPF.join()
            let map = this.tempDate[key]
            if (!map) {
                this.tempDate[key] = map = await calcAll(GPF)
            }
            setTimeout(() => {
                this.data = map[FW.join()] ? [...map[FW.join()]] : []
                if (isStorage) {
                    this.storage.unshift({ name, GPF, FW })
                    this.storage.length > 5 && this.storage.pop()
                    setStorage('CalcGF', this.storage)
                }
                this.loading = false
            }, 50)
        },
        handleRecodeCalc(i) {
            const { GPF, FW, name } = this.storage[i]
            this.name = name
            this.GPF = [...GPF]
            this.FW = [...FW]
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
