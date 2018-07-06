import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {
                title: '野生檔次試算'
            },
            component: r => require.ensure([], () => r(require('@V/Home')), 'Home')
        },
        {
            path: '/test',
            name: 'Home',
            meta: {
                title: '野生檔次試算2'
            },
            component: r => require.ensure([], () => r(require('@V/Home')), 'Home')
        }
    ]
})
export default router
