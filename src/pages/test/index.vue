<template>
	<div class="test">
		<div class="header">
			<div class="title">{{question.question_title}}</div>
			<div class="number">{{question.all}}人在测</div>
		</div>
		<div class="banner" :style="'background-image: url('+question.question_picture+')'"></div>
		<div class="text">{{question.question_content}}</div>
		<div class="test-btn">
			
			<button
			class="btn"
			open-type="share">
				<img src="/static/img/share.png" alt="分享给好友" class="btn-img"/>
			</button>
			<img src="/static/img/start.png" alt="开始测试" class="btn-img right" @click="start"/>
		</div>
		<div class="footer">
			<div v-for="(item, index) in banners" :key="index" class="img" :style="'background-image: url('+item.img+')'"></div>
		</div>
	</div>
</template>

<script>
	import Vue   from 'vue';
	const {dispatch, commit, getters, state} = Vue.store;

	export default{
		onShareAppMessage(res) {
			return {
				title    : `${this.question.question}`,
				path     : `/pages/index/main`,
				imageUrl : this.question.question_picture
			}
	    },
		data() {
			return {
			}
		},
		computed: {
	      	banners () {
	      		const ban = state.Banner.banner.filter(v => v.type === '5');
	        	return ban || [{img : '/static/img/advertising.png'}]
	        },
	        question() {
	        	return state.Question.question || {};
	        },
	    },
		methods: {
			start() {
				const url = '../start/main'
				wx.redirectTo({url})
			},
			share() {
				console.log('share')
			}
		}
	}
</script>

<style>
	Page{
		background-color: #e7e7e7;
	}
	button {
		display: inline-block;
		border     : none;
		background : none;
	}
	button::after {
		border: none;
	} 
	.test{
		padding: 0 40rpx;
	}
	.test .header{
		text-align: center;
	}
	.test .title{
		font-size: 37rpx;
		line-height: 80rpx;
	}
	.test .number{
		color: #999;
		font-size: 26rpx;
		margin-bottom: 20rpx;
	}
	.test .banner{
		height: 444rpx;
		background-size: 100% 100%;
	}
	.test .text{
		color: #999;
		padding: 20rpx 0;
		font-size: 30rpx;
		margin-bottom: 80rpx;
	}
	.test .right{
		position: absolute;
		right: 0;
		margin-right: 40rpx;
	}
	.test .test-btn .btn-img{
		width: 280rpx;
		height: 80rpx;
	}
	.test .footer .img{
		height: 128rpx;
		margin: 10rpx 0;
		border-radius: 20rpx;
		background-size: cover;
	}
</style>