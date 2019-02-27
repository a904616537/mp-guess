<template>
	<div class="menu">
		<ul class="list-style">
			<li @click="home" :class="{selected : index == 0}">
				<img :src="index == 0 ? '/static/icon/home-red.png' : '/static/icon/home.png'" class="icon-style" />
				<p>首页</p>
			</li> 
			<li class="qr-code" @click="service">
				<img src="/static/icon/erweima.png" class="icon-style" />
			</li>
			<li @click="profile" :class="{selected : index == 1}">
				<img :src="index == 1 ? '/static/icon/me-red.png' : '/static/icon/me.png'" class="icon-style" />
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import store from '@/store';
	const {dispatch, commit, getters, state} = store;
	export default{
		name : 'menu',
		date() {
			return {

				}
		},
		props : {
			index : {
				type    : Number,
				default : 0
			}
		},
		computed: {
	        token () {
	        	return state.User.token
	        },
	    },
		methods : {
			home() {
				const url = '../index/main'
				wx.redirectTo({url})
			},
			getQueryString(url) {
				let params=url.split("?")[1];
				if(params.length == 0) return null;
				params=params.split("&");
				const data = new Map();
				params.map(val => {
					const arr = val.split('=');
					data.set(arr[0], arr[1]);
					return val;
				});
				console.log('params', data.get('code'));
				return data;
			},
			service(e) {
				const that = this;
				wx.scanCode({
					onlyFromCamera: true,
					success(res) {
						console.log('res.result' ,res.result)
						if(res.errMsg == "scanCode:ok") {
							const data = that.getQueryString(res.result);
							if(data) {
								console.log('code', data.get('code'));
								that.requestSweep(data.get('code'), data.get('number'))
								.then(() => {
								})
								.catch(() => {
								})

							} else {
								wx.showToast({
									title    : '未检测到商品!',
									icon     : 'none',
									duration : 2000
								})
							}
						} else {
							wx.showToast({
								title    : '未检测到商品!',
								icon     : 'none',
								duration : 2000
							})
						}
					}
				})
			},
			requestSweep(code, number) {
				return new Promise((resolve, reject) => {
					const data = {sku : code, number : number};
					console.log('data', data);
					wx.request({
						url     : `${Vue.setting.api}/sweep`,
						method : 'post',
						data : data,
						header  : {token : this.token},
						success : (result, req) => {
							console.log('sweep result', result);
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
			},
			profile() {
				const url = '../profile/main'
				wx.redirectTo({url})
			}
		}
	}
</script>

<style lang="scss">
	.menu{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #E84140;
		background-color: #fff;
		padding: {
			top: 3px;
			bottom: 3px;
		}
		.list-style{
			display: flex;
			justify-content: space-around;
			text-align: center;
			font-size: 11px;
			color: #888888;
		}
		.icon-style{
			width: 24px;
			height: 24px;
		}
		.qr-code{
			background-color: #E84140;
			width: 40px;
			height: 40px;
			border-radius: 20px;
			.icon-style{
				width: 30px;
				height: 30px;
				margin-top: 5px;
			}
		}
		.selected{
			color: #E84140;
		}
	}
</style>