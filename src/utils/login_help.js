/**
* FileType js
* Sample React Redux 
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2018-07-02 10:52:43
* @Description
* @Flow 
*/

import Vue     from 'vue';
import WxCrypt from './WXBizDataCrypt';
import store   from '../store';


	const error = new Map([
	    [501, '用户未授权'],
	    [502, '用户信息获取失败'],
	    [503, '服务器响应失败'],
	    [504, '微信响应失败'],
	    [505, '登陆失败']
	]);


export default {
	onSetSessionKey (key) {
        store.commit('user/session_key', key)
    },
    onLogin (user) {
        store.commit('user/login', user)
    },
	onWXApp(user) {
		return new Promise((resolve, reject) => {
			const data = {
				// nickname : user.nickName,
				// openid   : user.openId,
				// unionid  : user.unionId,
				// avatar   : user.avatarUrl,
				// gender   : user.gender,
				phone : user.phone
			}
	    	wx.request({
	    		method : 'post',
				url     : `${Vue.setting.api}/login`,
				data    : data,
				success : (result, req) => {
	            	store.commit('user/detail', result.data);
	            	resolve(result.data);
	            }
	        })
	    });
	},

	onGetUserInfo() {
	    return new Promise((resolve, reject) => {

	        wx.getSetting({
	            success : (res) => {
	                if (res.authSetting['scope.userInfo']) {
                        this.onGetLogin()
                        .then(userdata => {
                        	// console.log('登陆服务器响应成功', userdata)
                        	// 登陆服务器响应成功
                        	const {session_key, openid} = userdata.data;
                        	
                        	wx.getUserInfo({
	                    		success : (res) => {
	            					const {encryptedData, iv} = res;

		                        	const pc = new WxCrypt(Vue.setting.appid, session_key);
		                        	if(store.state.User.share) {
		                        		this.share = pc.decryptData(store.state.User.share.encryptedData, store.state.User.share.iv)
		                        	}
		                        	
						            const data = pc.decryptData(encryptedData , iv)
						            if(data) {
						            	this.onSetSessionKey(session_key);
		                            	this.onLogin(data);
		                            	this.requestMpUser(data, (user) => {
		                            		console.log('user --->', user);
		                            		resolve(user);
		                            	});

						            } else reject(error.get(503))
	                			},
                				fail : (err) => reject(error.get(502))
                			})
                        })
                        .catch((err) => {
                        	console.log('err', err)
                        	reject(error.get(503))
                        })
	                } else reject(error.get(501))
	            },
	            fail : (err) => reject(error.get(501))
	        });
	    });
	},
	onGotUserInfo(e, callback) {
		if(e.mp.detail.rawData){

			wx.showLoading({
				title : '加载中'
			})

			//用户按了允许授权按钮
			console.log('用户按了允许授权按钮')
			const {encryptedData, iv} = e.mp.detail;
	        this.onGetUserInfo()
	        .then(userdata => {
	        	wx.hideLoading();
	        	console.log('userdata ===>', userdata)
	        	callback(userdata, false);

	        	// setTimeout(() => {
	        	// 	callback(user ,false)
	        	// }, 1000);
	        })
	        .catch(() => {
				callback(null, error.get(503))
	        })
		} else {
			//用户按了拒绝按钮
			console.log('用户按了拒绝按钮')
			callback(null, error.get(501))
		}
	},
	onGetLogin() {
	    return new Promise((resolve, reject) => {
	        wx.login({
	            success : (res) => {
	                if (res.code) {
	                	const data = {
							appid      : Vue.setting.appid,
							secret     : Vue.setting.secret,
							js_code    : res.code,
							grant_type : 'authorization_code'
	                	};
	                    wx.request({
							url     : `${Vue.setting.api}/sessionkey`,
							data    : data,
							method : 'post',
							success : (result) => {
								resolve(result)
							},
							fail    : (err) => {
	                        	console.log('err', err)
	                        	reject(error.get(503))
	                        }
	                    })
	                } else reject(error.get(504))
	            }
	        });
	    });
	},
	onGetPhone(e, callback) {

		if(e.mp.detail.errMsg == "getPhoneNumber:ok"){

			wx.showLoading({
				title : '加载中'
			})

			//用户按了允许授权按钮
			console.log('用户按了允许授权按钮')
			const {encryptedData, iv} = e.mp.detail;

			this.onGetLogin()
			.then(userdata => {
				const {session_key, openid} = userdata.data;
				const pc = new WxCrypt(Vue.setting.appid, session_key);
				const data = pc.decryptData(encryptedData , iv)
				
            	this.onWXApp({phone:data.phoneNumber})
            	.then((detail) => {
            		// 登陆成功后获取用户详细数据
            		wx.hideLoading();
					callback(detail, true)
            	})
				
			})
			.catch((err) => {
            	console.log('err', err)
            	callback(error.get(503), false)
            	wx.hideLoading();
            });

		} else {
			//用户按了拒绝按钮
			console.log('用户按了拒绝按钮')
			callback(error.get(501), false)
		}
	},
	requestMpUser(user, callback) {
		wx.request({
			url     : `${Vue.setting.api}/mp-user`,
			method : 'post',
			data    : user,
			success : (result, req) => {
				callback(result.data);
            }
        })
	},
	onRequstShare(gid) {
		const data = {
			team_union : gid,
			uid        : store.state.User.share_uid,
			token      : store.state.User.token,
		}
		wx.request({
			url     : `${Vue.setting.api}/share_team_get`,
			data    : data,
			success : (result, req) => {
				console.log('result share_team_get', result)
            }
        })
	}
}