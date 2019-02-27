<template>
	<div class="login">
		<div class="profile center">
			<open-data type="userAvatarUrl" class="user-img" mode="aspectFill"></open-data>
			<!-- <image class="user-img" mode="aspectFill" :src="user.avatarUrl" /> -->
			<p class="login-title">DropChain 供应平台</p>
		</div>
		<button
		v-if="show"
		lang         = "zh_CN"
		open-type    = "getUserInfo"
		class        = "btn login-btn"
		@getuserinfo = "onGotUserInfo">
			登陆
		</button>
		<button
		v-else
		lang         = "zh_CN"
		open-type    = "getPhoneNumber"
		class        = "btn login-btn"
		@getphonenumber = "onGetPhone">
			本机登陆
		</button>
	</div>
</template>

<script>
	import Vue        from 'vue';
	import login_help from '@/utils/login_help';
	import store      from '@/store';

	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'login',
		data() {
			return {
				show : true,
				sweep : null
			}
		},
		components: {
		},
		computed: {
			isLogin() {
				return getters.isLogin
			},
			user () {
	        	return state.User.user
	        },
	        token () {
	        	return state.User.token
	        },
	    },
		methods: {
			topage(url) {
				wx.navigateTo({url})
			},
			onGotUserInfo(e) {
		    	login_help.onGotUserInfo(e, (user, err) => {
		    		if(err){
		    			wx.showToast({
							title    : err,
							icon     : 'none',
							duration : 2000
						})
		    		} else {
		    			this.requestSweep(user._id)
						.then(() => {
						})
						.catch(() => {
						})
		    			this.show = false;
		    			wx.hideLoading();
		    		}
		    	})
			},
			onGetPhone(e) {
				console.log('本机登陆', e)
				login_help.onGetPhone(e, (data, status) => {
					console.log('get phone ===>', data)
					if(status) {
						const url = '../index/main'
						wx.redirectTo({url});
					}
				});
			},
			requestSweep(user) {
				return new Promise((resolve, reject) => {
					if(!this.sweep) {
						resolve();
						return;
					}
					const data = {sku : this.sweep.code, number : this.sweep.number, user};
					wx.request({
						url     : `${Vue.setting.api}/sweep`,
						method : 'post',
						data : data,
						header  : {token : this.token},
						success : (result, req) => {
							let msg = '商品已录入!';
							if(result.data.status == false) msg = result.data.msg;
							wx.showToast({
								title    : msg,
								icon     : 'success',
								duration : 2000
							})
							resolve();
						},
						fail : (err) => {
							reject()
						}
					})
				});
			}
		},
		beforeMount() {
			wx.showLoading({
				title : '加载中'
			})
			login_help.onGetUserInfo()
            .then(user => {
            	this.show = false;
            	wx.hideLoading();
            	this.requestSweep(user._id)
				.then(() => {
				})
				.catch(() => {
				})
            })
	        .catch(err => {
	        	console.log('未登陆', err, this.isLogin)
	        	wx.hideLoading();
	        })
		},
		onLoad(option) {
			console.log('option.query', option)
			if(option.code) {
					wx.showToast({
						title: `${option.code} ${option.number}`,
						icon: 'success',
						duration: 2000
					})
				this.sweep = {
					code : option.code,
					number : Number(option.number)
				}
			}
		}
	}
</script>
<style>
	.login {
		height: 100%;
		width: 100%;
		position: fixed;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content: center;
	    background      : #e84140;
	}
	.login-title {
		font-size: 28rpx;
		margin-bottom: 40rpx;
		color: #fff;
	}
</style>
