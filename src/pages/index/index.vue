<template>
	<div class="index">
		<swiper
		style ="height : 360rpx;"
		:autoplay="true"
		:interval="5000"
		:duration="1000"
		:indicatorDots="true"
		indicatorColor="rgba(255,255,255,.4)"
		indicator-active-color="#fff"
		>
			<block v-for="(item, index) in banner" :key="index">

				<swiper-item class="swiper-item">
					<button open-type="contact" send-message-title="5" class="banner" @contact="onContact" :style="'background-image: url('+item.img+')'">
						<div class="banner-title" style="background-image: url('/static/img/title-bg.png')">{{item.content}}</div>
					</button>
			    </swiper-item>
			</block>
		</swiper>
		<div style="padding : 40rpx;">
			<v-questions :onBack="click"/>
		</div>

		<v-login :show="show" :close="onClose"></v-login>
	</div>
</template>

<script>
	import Vue           from 'vue';
	import Login         from '@/components/login';
	import Questions     from '@/components/questions';
	import constact_help from '@/utils/mp-contact';

	const {dispatch, commit, getters, state} = Vue.store;

	export default{
		onShow() {
			this.onSetQuestion();
		},
		data() {
			return {
				show : false
			}
		},
		components: {
			'v-login'     : Login,
			'v-questions' : Questions
		},
		computed: {
			user () {
	        	return state.User.user
	        },
	        isLogin() {
	        	return state.User.token?true:false;
	        },
	      	banner () {
	      		const ban = state.Banner.banner.filter(val => val.type.includes('5') && val.share_key.includes('top'))
	        	return ban && ban.length > 0? ban : [{img : '/static/img/banner.png'}]
	        },
	    },
		methods: {
			onContact(handler) {
				console.log('客服消息回调', handler);
			},
			onContent() {
				if(!this.isLogin) {
					this.show = true;
					return;
				}
				const msg = {
					touser  : this.user.openId,
					msgtype : "text",
					content : "欢迎来到抓娃娃王国"
				};
				console.log('msg', msg);

				constact_help.sendCustomMsg(msg)
				.then(result => {
					console.log('发送客服消息返回结果', result);
				})
				.catch(err => {
					console.log('发送客服消息失败');
				})
			},
			click(question) {
				if(getters.isLogin) {
					dispatch('setQuestion', question)
					const url = '../test/main'
					wx.navigateTo({url})
				} else { this.show = true; }
			},
			onClose() {
				this.show = false
			},
			onSetQuestion() {
				
				wx.request({
					url     : `${Vue.setting.api}mobile/qa3`,
					success : (result, req) => {
						if(result.data.ret === 0) {
							dispatch('onInitQuestion', result.data.data);
						} else {
							wx.showToast({
								title    : '网络错误！',
								icon     : 'none',
								duration : 2000
							})
						}
		            }
		        })
			},
			onSetbanner() {
				const data = {
					type : 5
				}
				wx.request({
					url     : `${Vue.setting.api}mobile/getPicture`,
					data    : data,
					success : (result, req) => {
						console.log('result get banner', result)
						dispatch('setBanner', result.data.picture)
		            }
		        })
			}
		},
		beforeMount() {
			this.onSetbanner();
		}
	}
</script>

<style>
	Page{
		background-color: #e7e7e7;
	}
	.index .banner{
		width: 100%;
		height: 400rpx;
		background-size: cover;
		position: relative;
	}
	.index .banner-title{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		color: #fff;
		text-align: center;
		font-size: 40rpx;
		line-height: 68rpx;
	}
</style>