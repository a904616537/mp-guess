import Vue from 'vue'
import App from './App'
import store   from './store'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


Vue.store                = store;
Vue.setting              = {
    api    : 'https://waguo.vip/',
    appid  : 'wx48cbc8c2696d0f4a',
    secret : '1b51ba7d70f708759890'
}

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages  : ['pages/logs/main', '^pages/index/main'],
        window : {
            backgroundTextStyle          : 'light',
            navigationBarBackgroundColor : '#82a5ff',
            navigationBarTitleText       : '男生女生最爱小测试',
            navigationBarTextStyle       : 'white'
        }
    }
}
