import Vue from 'vue'
import App from './App'
import store from './store'
import QQMapWX from 'qqmap-wx-jssdk'
import '@/style/base.scss'

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()

const qqmapsdk = new QQMapWX({
    key: 'ADHBZ-WBMRX-RXO4K-ZNO2B-XP3B2-BBFSH'
});


Vue.store                = store;
Vue.setting              = {
    appid  : 'wxd3e1fcbdc2c2b554',
    api    : 'https://dropchain.h-fish.cn',
    // api    : 'http://localhost:8011',
    secret : 'd63b6b2ac959bb548dd2b52eb478b321',
    mapsdk : qqmapsdk
}

console.log('Vue.setting.api', Vue.setting.api);
export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages : ['^pages/login/main', 'pages/index/main', 'pages/order/main', 'pages/week/main', 'pages/inventory/main', 'pages/details/main', 'pages/profile/main', 'pages/all/main', 'pages/company/main', 'pages/award/main', 'pages/record/main', 'pages/address/main', 'pages/addAddress/main', 'pages/service/main', 'pages/bill/main' ],
        window : {
            backgroundTextStyle          : 'light',
            navigationBarBackgroundColor : '#E84140',
            navigationBarTitleText       : 'Dropchain',
            navigationBarTextStyle       : 'white'
        }
    }
}
