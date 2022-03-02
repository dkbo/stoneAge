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
        },
        {
            path: '/CalcPostiveHp',
            name: 'CalcPostiveHp',
            meta: {
                title: '成長檔算毒血'
            },
            component: r => require.ensure([], () => r(require('@V/CalcPostiveHp')), 'CalcPostiveHp')
        },
        {
            path: '/CalcP',
            name: 'CalcP',
            meta: {
                title: '成長率算成長檔'
            },
            component: r => require.ensure([], () => r(require('@V/CalcP')), 'CalcP')
        },
        {
            path: '/CalcTurnFourWei',
            name: 'CalcTurnFourWei',
            meta: {
                title: '四圍算1轉檔次'
            },
            component: r => require.ensure([], () => r(require('@V/CalcTurnFourWei')), 'CalcTurnFourWei')
        },
        {
            path: '/ThreeBrother',
            name: 'ThreeBrother',
            meta: {
                title: '猜謎三兄弟'
            },
            component: r => require.ensure([], () => r(require('@V/ThreeBrother')), 'ThreeBrother')
        }
    ]
})
export default router
