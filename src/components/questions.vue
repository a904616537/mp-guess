<template>
	<div class="question">
		<div class="inner">

			<!--START 题库 -->
			<div v-for="(item, index) in questions" :key="index" class="item clearfloat" @click='() => onBack(item)'>
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
</template>

<script>
	import Vue           from 'vue';

	const {dispatch, commit, getters, state} = Vue.store;

	export default{
		data() {
			return {
			}
		},
		props : {
			onBack: {
				type    : Function,
				default : (item) => {console.log('用户未登陆', item)}
			}
		},
		computed: {
	        isLogin() {
	        	return state.User.token?true:false;
	        },
	        questions() {
	        	return state.Question.questions || [];
	        },
	    },
		methods: {
		}
	}
</script>

<style>
	.question{
	}
	.question .inner{
		background-color : #fff;
		border-radius    : 10rpx;
		padding          : 20rpx 10rpx 20rpx 20rpx;
		overflow         : hidden;
		font-size        : 26rpx;
	}
	.question .item{
		width         : 100%;
		position      : relative;
		margin-bottom : 40rpx;
	}
	.question .left{
		float : left;
	}
	.question .right{
		float  : right;
		height : 140rpx;
		width  : 420rpx;
	}
	.question .right .title{
		background-color : #82a5ff;
		border-radius    : 5rpx;
		color            : #fff;
		padding          : 0 10rpx;
		line-height      : 50rpx;
	}
	.question .right .number{
		position  : absolute;
		bottom    : 0;
		color     : #fe6060;
		font-size : 30rpx;
	}
	.question .clearfloat{
		content  : '';
		clear    : both;
		display  : table;
		height   : 0;
		overflow : hidden;
	}
	.question .item-img{
		width           : 136rpx;
		height          : 136rpx;
		background-size : cover;
		overflow        : hidden;
		border-radius   : 10rpx;
		border          : 4rpx solid #82a5ff;
	}
</style>