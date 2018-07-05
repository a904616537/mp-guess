<template>
	<div class="test">
		<div class="header">
			<div class="title">{{title}}</div>
			<div class="number">{{number}}人在测</div>
		</div>
		<div class="banner" style="background-image: url('/static/img/test-banner.jpg')"></div>
		<div class="text">{{text}}</div>
		<div class="test-btn">
			<img src="/static/img/share.png" alt="分享给好友" class="btn-img" @click="share"/>
			<img src="/static/img/start.png" alt="开始测试" class="btn-img right" @click="start"/>
		</div>
		<div class="footer">
			<div class="img" style="background-image: url('/static/img/advertising.png')"></div>
			<div class="img" style="background-image: url('/static/img/advertising.png')"></div>
			<div class="img" style="background-image: url('/static/img/advertising.png')"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				title: '一张图测试你的好色程度，准！',
				number: '79140',
				text: '孩子们第一眼看到的是海豚......'
			}
		},
		methods: {
			start() {
				const url = '../start/main'
				wx.navigateTo({url})
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
		background-size: cover;
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
		background-size: contain;
	}
</style>