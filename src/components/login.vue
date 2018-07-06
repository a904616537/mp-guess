<template>
	<div class="login">
		<div class="mask">
			<img src="/static/img/logo.png" alt="" class="logo-img" />
			<p>需要授权才可以继续哦！</p>
			<button
				lang            = "zh_CN"
				class           = "btn"
				open-type       = "getUserInfo"
				@getuserinfo 	= "onGotUserInfo">
					授权登陆
			</button>
		</div>
	</div>
</template>

<script>

	export default{
		data() {
			return {

			}
		},
		props : {
			show: {
				type : Boolean,
				default : false
			},
			close: {
				type: Function,
				default: () => {console.log('close login')}
			}
		},
	}
</script>

<style>
	.login{
		width            : 100%;
		height           : 100%;
		top              : 0;
		left             : 0;
		z-index          : 99;
		display          : flex;
		align-items      : center;
		justify-content  : center;
		position         : fixed;
		background-color : rgba(0,0,0,0.4);
	}
	.login .mask{
		width            : 60vw;
		border           : 1px solid #eee;
		position         : relative;
		background-color : #fff;
		padding          : 40rpx 0 0;
		text-align       : center;
	}
	.mask .logo-img{
		width         : 100rpx;
		height        : 100rpx;
		border-radius : 50rpx;
	}
	.mask p{
		color       : #ccc;
		font-size   : 24rpx;
		line-height : 100rpx;
	}
	button{
		border           : none;
		border-radius    : 0;
		background-color : transparent;
		border-top       : 1px solid #eee;
		font-size        : 32rpx;
	}
	button:after{
		border : none;
	}
</style>