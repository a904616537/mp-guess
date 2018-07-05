<template>
	<div class="start">
		<div class="title">{{number}}/{{count}} {{question}}</div>
		<div class="content">
			<div class="answer">1只</div>
			<div class="answer">3只</div>
			<div class="answer">4只</div>
			<div class="answer">5只</div>
			<div class="answer">9只以上</div>
		</div>
		<div class="footer-btn" @click="result">开始测试</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				number: '1',
				count: '1',
				question: '你能从中看到多少只海豚？'
			}
		},
		methods: {
			result() {
				const url = ',,/result/main'
				wx.navigateTo({url})
			}
		}
	}
</script>

<style>
	Page{
		background-color: #e7e7e7;
	}
	.start{
		padding: 0 40rpx;
	}
	.start .title{
		line-height: 128rpx;
		color: #7b7b7b;
		font-size: 36rpx;
	}
	.start .answer{
		color: #fff;
		background-color: #82a5ff;
		margin-bottom: 40rpx;
		padding: 0 50rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		border-radius: 15rpx;
	}
	.start .footer-btn{
		background-color: transparent;
		border: 2rpx solid #82a5ff;
		color: #82a5ff;
		line-height: 80rpx;
		width: 296rpx;
		margin: 0 auto;
		border-radius: 15rpx;
		text-align: center;
		margin-top: 60rpx;
	}
</style>