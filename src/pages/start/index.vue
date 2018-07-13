<template>
	<div class="start">
		<div class="title">{{question.question || '小测试'}}</div>
		<div class="content">
			<div
			v-for="(item, index) in question.answer"
			class="answer"
			:class="{ selected : select_key === index}"
			:key="index"
			@click="() => onSelected(index)"
			>{{item.text}}</div>
		</div>
		<div class="footer-btn" @click="result">开始测试</div>
	</div>
</template>

<script>
	import Vue   from 'vue';
	const {dispatch, commit, getters, state} = Vue.store;

	export default{
		onShow() {
			this.select_key = -1;
		},
		data() {
			return{
				select_key : -1
			}
		},
		computed: {
	        question() {
	        	return state.Question.question || {};
	        },
	    },
		methods: {
			onSelected(index) {
				this.select_key = index;
			},
			onRequest(next) {
				const data = {
					id : this.question.id
				}
				wx.request({
					url     : `${Vue.setting.api}mobile/setQuestionNum3`,
					data    : data,
					success : (result, req) => {
						console.log('提交后台结果', result);
						if(next) next();
		            }
		        })
			},
			result() {
				wx.showLoading({
					title : '加载中'
				})
				if(this.select_key > -1) {
					this.onRequest(() => {
						wx.hideLoading();
						const url = `../result/main?key=${this.select_key}`
						wx.navigateTo({url})
					});
				} else {
					wx.hideLoading();
					wx.showToast({
						title    : '你还没选择答案！',
						icon     : 'none',
						duration : 1000
					})
				}
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
	.start .selected {
		background-color : #ffa168;
	}
</style>