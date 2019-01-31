<template>
	<div class="address">
		<div class="inner">
			<div class="item">
				<div class="label">联系人</div>
				<div class="text-style">Jack</div>
			</div>
			<div class="item">
				<div class="label">联系方式</div>
				<div class="text-style">188 1234 9876</div>
			</div>
			<div class="item">
				<div class="label">收货地址</div>
				<div class="text-style address-infor">上海市 静安区 康定路 1018号 逸阁大楼237室</div>
			</div>
		</div>
		<div class="handle">
			<div class="btn" @click="del">删除</div>
			<div class="btn solid-btn">编辑</div>
		</div>
		<div class="btn full-btn" @click="addAddress">新增地址</div>
		<div v-show="isShow">
			<v-alert :close="close" :enter="enter"></v-alert>
		</div>
	</div>
</template>

<script>
	import Alert from '@/components/alert'

	export default{
		name : 'address',
		data() {
			return {
				isShow : false
			}
		},
		components: {
			'v-alert' : Alert
		},
		methods: {
			del() {
				this.isShow = !this.isShow
			},
			close() {
				this.isShow = false
			},
			enter() {
				this.isShow = false
				console.log('确定删除地址！')
			},
			addAddress() {
				const url = '../addAddress/main'
				wx.navigateTo({url})
			}
		}
	}
</script>
