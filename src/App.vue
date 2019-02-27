<script>
    
import login_help from './utils/login_help';
import store from './store'
// const {dispatch, commit, getters, state} = Vue.store;

export default {
    onLaunch(ops) {
        if (ops.scene == 1044) {
            wx.getShareInfo({
                shareTicket : ops.shareTicket,
                success     : (res) => { 
                    store.commit('user/share', res)
                },
                fail        : (res) => { console.log('error', res) },
                complete    : (res) => { console.log('complete') }
            })
        }
    },
    beforeMount() {
        // wx.showLoading({
        //     title : '加载中'
        // })
        // login_help.onGetUserInfo()
        // .then(res => wx.hideLoading())
        // .catch(err => {
        //     console.log(err)
        //     wx.hideLoading()
        // })
    },
    created() {
        wx.getSystemInfo({
            success(res) {
                console.log('设备信息', res)
                // store.dispatch('onSetSystem', {width : res.windowWidth, height : res.windowHeight, system : res.system})
            }
        })
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.container {
    height          : 100%;
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : space-between;
    padding         : 200rpx 0;
    box-sizing      : border-box;
}
* {
    transition         : width 2s;
    -moz-transition    : width 2s;
    -webkit-transition : width 2s;
    -o-transition      : width 2s;
}

.tab-h{
    width: 100%;
    height: 50rpx;
}
.tab-item{
    }
</style>
