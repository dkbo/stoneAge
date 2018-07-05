<template>
  <div class="container">
    <Table border :columns="columns" :data="data" />
  </div>
</template>
<script>
import { calc } from '@UTIL'
const GPF = [24, 38, 16, 20] // 體,腕,耐,速
const GPFR = [1, 3, 3, 3] // 體,腕,耐,速
const f = [2, 2, 2, 2] // 體,腕,耐,速
const data = calc(GPF, GPFR, f)
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
        return {
            columns: [
                health,
                ininFourWei
            ],
            data: [
                {
                    ...data.health,
                    ...data.fourWei
                }
            ]
        }
    },
    computed: {
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        }
    },
    components: {
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
