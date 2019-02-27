<template>
	<div class="address">
		<div class="inner">
			<div class="item">
				<div class="label">联系人</div>
				<div class="text-style">{{detail.recentOrderInfo.contactPerson}}</div>
			</div>
			<div class="item">
				<div class="label">联系方式</div>
				<div class="text-style">{{detail.recentOrderInfo.contactPhone}}</div>
			</div>
			<div class="item">
				<div class="label">收货地址</div>
				<div class="text-style address-infor">{{address}}</div>
			</div>
		</div>
		<!-- <div class="handle">
			<div class="btn" @click="del">删除</div>
			<div class="btn solid-btn">编辑</div>
		</div> -->
		<!-- <div class="btn full-btn" @click="addAddress">新增地址</div> -->
		<div v-show="isShow">
			<v-alert :close="close" :enter="enter"></v-alert>
		</div>
	</div>
</template>

<script>
	import Alert from '@/components/alert'
	import store from '@/store';
	const {dispatch, commit, getters, state} = store;

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
		computed: {
	        detail() {
	        	return state.User.detail
	        },
	        address() {
	        	const {city,district,address} = this.detail.recentOrderInfo.finalAddress;
	        	return `${city} ${district} ${address}`
	        }
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
