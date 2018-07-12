<template>
	<div class="index">
		<div class="banner" :style="'background-image: url('+banner.img+')'">
			<div class="banner-title" style="background-image: url('/static/img/title-bg.png')">{{banner.content}}</div>
		</div>
		<div class="content">
			<div class="inner">

				<!--START 题库 -->
				<div v-for="(item, index) in questions" :key="index" class="item clearfloat" @click='() => click(item)'>
					<div class="left">
						<div class="item-img" :style="'background-image: url('+item.question_picture+')'"></div>
					</div>
					<div class="right">
						<div class="title">{{item.question_title}}</div>
						<div class="number">{{item.all}}人</div>
					</div>
				</div>
				<!--END 题库 -->

			</div>
		</div>

		<v-login :show="show" :close="onClose"></v-login>
	</div>
</template>

<script>
	import Vue   from 'vue';
	import Login from '@/components/login';

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
			'v-login' : Login
		},
		computed: {
	      	banner () {
	      		const ban = state.Banner.banner.find(v => v.type === '1');
	        	return ban || {img : '/static/img/banner.png'}
	        },
	        questions() {
	        	return state.Question.questions || [];
	        },
	    },
		methods: {
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
	.index .content{
		padding: 40rpx;
	}
	.index .inner{
		background-color: #fff;
		border-radius: 10rpx;
		padding: 20rpx 10rpx 20rpx 20rpx;
		overflow: hidden;
		font-size: 26rpx;
	}
	.index .item{
		width: 100%;
		position: relative;
		margin-bottom: 40rpx;
	}
	.index .left{
		float: left;
	}
	.index .right{
		float: right;
		height: 140rpx;
		width: 420rpx;
	}
	.index .right .title{
		background-color: #82a5ff;
		border-radius: 5rpx;
		color: #fff;
		padding: 0 10rpx;
		line-height: 50rpx;
	}
	.index .right .number{
		position: absolute;
		bottom: 0;
		color: #fe6060;
		font-size: 30rpx;
	}
	.index .clearfloat{
		content: '';
		clear: both;
		display: table;
		height: 0;
		overflow: hidden;
	}
	.index .item-img{
		width: 136rpx;
		height: 136rpx;
		background-size: cover;
		overflow: hidden;
		border-radius: 10rpx;
		border: 4rpx solid #82a5ff;
	}
</style>