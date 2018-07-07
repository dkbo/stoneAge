import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'CalcFourWei',
            meta: {
                title: '檔次算四圍'
            },
            component: r => require.ensure([], () => r(require('@V/CalcFourWei')), 'CalcFourWei')
        },
        {
            path: '/CalcGF',
            name: 'CalcGF',
            meta: {
                title: '四圍算檔次'
            },
            component: r => require.ensure([], () => r(require('@V/CalcGF')), 'CalcGF')
        }
    ]
})
export default router
