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
		methods : {
			home() {
				const url = '../index/main'
				wx.navigateTo({url})
			},
			service() {
				const url = '../service/main'
				wx.navigateTo({url})
			},
			profile() {
				const url = '../profile/main'
				wx.navigateTo({url})
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