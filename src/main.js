// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import '@UTIL/prototype'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import '../css/main.scss'

// UI 組件
import iView from './components/iViewMain'
import '../css/my-theme.less'

import VueRx from 'vue-rx'
// vue rxjs
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
// import 'rxjs/add/observable/fromEvent'
// import 'rxjs/add/operator/bufferTime'
// import 'rxjs/add/operator/filter'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/do'
// import 'rxjs/add/operator/share'
// import 'rxjs/add/operator/throttleTime'
Vue.use(iView)
Vue.use(VueRx, { Observable, Subscription })

Vue.config.productionTip = false

const vue$ = new Vue({
    el: '#app',
    router,
    store,
    render: createElement => createElement(App)
})