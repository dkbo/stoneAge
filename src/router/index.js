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
                title: ''
            },
            component: r => require.ensure([], () => r(require('@V/Home')), 'Home'),
            // children: [
            //     {
            //         path: 'Dashboard',
            //         name: 'Dashboard',
            //         meta: {
            //             title: '盈亏统计'
            //         },
            //         component: r => require.ensure([], () => r(require('@V/Dashboard')), 'Dashboard')
            //     }
            // ]
        }
    ]
})

export default router
