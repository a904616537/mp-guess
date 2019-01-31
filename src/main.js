import Vue from 'vue'
import App from './App'
import store from './store'
import QQMapWX from 'qqmap-wx-jssdk'

import '@/style/base.scss'

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()


Vue.store                = store;
Vue.setting              = {
    appid       : 'wxe00d5636210d0e6f',
}

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages : ['^pages/index/main', 'pages/order/main', 'pages/week/main', 'pages/inventory/main', 'pages/details/main', 'pages/profile/main', 'pages/all/main', 'pages/company/main', 'pages/award/main', 'pages/record/main', 'pages/address/main', 'pages/addAddress/main', 'pages/service/main', 'pages/bill/main' ],
        window : {
            backgroundTextStyle          : 'light',
            navigationBarBackgroundColor : '#E84140',
            navigationBarTitleText       : 'Dropchain',
            navigationBarTextStyle       : 'white'
        }
    }
}
