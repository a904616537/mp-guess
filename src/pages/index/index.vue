<template>
	<div class="index">
		<div class="banner" style="background-image: url('/static/img/banner.png')">
			<div class="banner-title" style="background-image: url('/static/img/title-bg.png')">测试：看看你能抓到它吗？</div>
		</div>
		<div class="content">
			<div class="inner">
				<div class="item clearfloat" @click='click'>
					<div class="left">
						<div class="item-img" style="background-image: url('/static/img/icon.png')"></div>
					</div>
					<div class="right">
						<div class="title">{{title}}</div>
						<div class="number">{{number}}万人</div>
					</div>
				</div>
				<div class="item clearfloat">
					<div class="left">
						<div class="item-img" style="background-image: url('/static/img/icon.png')"></div>
					</div>
					<div class="right">
						<div class="title">{{title}}</div>
						<div class="number">{{number}}万人</div>
					</div>
				</div>
				<div class="item clearfloat">
					<div class="left">
						<div class="item-img" style="background-image: url('/static/img/icon.png')"></div>
					</div>
					<div class="right">
						<div class="title">{{title}}</div>
						<div class="number">{{number}}万人</div>
					</div>
				</div>
				<div class="item clearfloat">
					<div class="left">
						<div class="item-img" style="background-image: url('/static/img/icon.png')"></div>
					</div>
					<div class="right">
						<div class="title">{{title}}</div>
						<div class="number">{{number}}万人</div>
					</div>
				</div>
			</div>
		</div>

		<v-login :show="show" :close="onClose"></v-login>
	</div>
</template>

<script>
	import Login from '@/components/login'

	export default{
		data() {
			return {
				show: true,
				title: '测试：测你能驯服哪种男人？',
				number: '1.0'
			}
		},
		components: {
			'v-login' : Login
		},
		methods: {
			click() {
				const url = '../test/main'
				wx.navigateTo({url})
			},
			onClose() {
				this.show = false
			}
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