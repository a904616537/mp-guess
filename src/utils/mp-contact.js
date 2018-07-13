/**
* FileType js
* Sample React Redux 
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2018-07-12 11:59:33
* @Description
* @Flow 
*/

import Vue     from 'vue';
import store   from '../store';

const {appid, secret, api} = Vue.setting;

export default {

	getAccessToken() {
		return new Promise((resolve, reject) => {
			const access_token = wx.getStorageSync('access_token');

			if(access_token || access_token.endTime < Date.now()) {
				console.log('access_token 未过期', access_token.endTime)
				resolve(access_token);
				return;
			}
			console.log('access_token 过期，获取新的token')
			const req = {
				appid,
				secret
			}
			wx.request({
					url     : `${api}mobile/getToken`,
					data    : req,
					success : (result, req) => {
						if(result.data.ret === 0) {
							let endTime = new Date();
							let t_s = endTime.getTime();
							endTime.setTime(t_s + result.data.data.expires_in);

							let access = Object.assign(result.data.data, {endTime})
							wx.setStorageSync('access_token', result.data.data)
							resolve(result.data.data);
						} else reject();
		            },
		            fail : (res) => {
		            	console.log('客服请求 access_token 错误！', res)
		            	reject()
		            }
		        })
		});
	},
	sendCustomMsg(data) {
		return new Promise((resolve, reject) => {
			this.getAccessToken()
			.then(result => {
				const req = Object.assign(data, {access_token : result.access_token});
				
				wx.request({
					url     : `${api}mobile/postWX`,
					data    : req,
					success : (result, req) => {
						console.log('result', result);
						resolve();
		            },
		            fail : (res) => {
		            	console.log('发送客服消息失败', res)
		            	reject()
		            }
		        })
			})
			.catch(err => {
				console.log('请求 access_token 失败！')
				reject('请求 access_token 失败！');
			})
		});
	}
}