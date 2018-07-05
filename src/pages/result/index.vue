<template>
	<div class="result">
		<div class="content" style="background-image: url('/static/img/envelope.png')">
			<div class="title">测试结果</div>
			<div class="content-img" style="background-image: url('/static/img/test-banner.jpg')"></div>
			<div class="user">
				<div class="user-img"></div>{{name}}
			</div>
			<div class="inner">
				测试结果：{{result}}
				<div class="text">{{text}}</div>
			</div>
			<div class="footer">
				<div class="qrcode"></div>
				<div class="qr-text">
					长按识别二维码<br/>一张图片测试你的好色程度
				</div>
			</div>
		</div>
		<div class="result-btn">
			<img src="/static/img/save.jpg" alt="保存图片" class="btn-img" @click="share"/>
			<img src="/static/img/share-full.jpg" alt="分享给好友" class="btn-img right" @click="start"/>
		</div>
		<div class="float-img" style="background-image: url('/static/img/float-btn.png')"></div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				name: '球球',
				result: 'kain你非常好色！！',
				text: '你非常非常非常好色！而且由内而外散发出来的色！kain！说得就是你'
			}
		}
	}
</script>

<style>
	Page{
		background-color: #e7e7e7;
	}
	.result .content{
		margin: 0 80rpx;
		height: 1000rpx;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.result .title{
		color: #82a5ff;
		text-align: center;
		padding-top: 50rpx;
		margin-bottom: 20rpx;
		font-size: 36rpx;
	}
	.result .content-img{
		width: 408rpx;
		height: 272rpx;
		margin: 0 auto;
		background-size: cover;
	}
	.result .user{
		margin-left: 90rpx;
		font-size: 28rpx;
		line-height: 60rpx;
		padding: 20rpx 0;
		color: #999;
	}
	.result .user-img{
		width: 60rpx;
		height: 60rpx;
		background-color: #ccc;
		border-radius: 60rpx;
		margin-right: 20rpx;
		float: left;
	}
	.result .inner{
		font-size: 26rpx;
		width: 420rpx;
		margin: 0 auto;
	}
	.result .inner .text{
		color: #999;
	}
	.result .footer{
		font-size: 24rpx;
		width: 430rpx;
		margin: 0 auto;
		margin-top: 15rpx;
	}
	.result .qrcode{
		width: 120rpx;
		height: 100rpx;
		background-color: #ccc;
		background-size: cover;
		float: left;
		margin-right: 20rpx;
	}
	.result .qr-text{
		padding-top: 18rpx;
	}
	.result-btn{
		margin-top: 50rpx;
		text-align: center;
	}
	.result-btn .btn-img{
		width: 280rpx;
		height: 80rpx;
		margin: 0 20rpx;
	}
	.result .float-img{
		position: fixed;
		bottom: 10rpx;
		right: 10rpx;
		width: 100rpx;
		height: 120rpx;
		background-size: cover;
	}
</style>