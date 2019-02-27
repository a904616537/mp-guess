<template>
	<div class="profile">
		<div class="banner">
			<!-- <div class="user-img" style="background-image: url('/static/imgs/user.jpeg')"></dode="aspectFill" :src="headUrl" -->
				<image class="user-img" mode="aspectFill" :src="user.avatarUrl" />
				<p class="sub-title">{{detail.phone}}</p>
		</div>
		<div class="inner">
			<div class="item" @click="toCompany">
				<img :src="icon.firm" class="icon-style" /> 企业信息
			</div>
			<div class="item" @click="toAward">
				<img :src="icon.award" class="icon-style" /> 奖励
				<span>1</span>
			</div>
			<div class="item" @click="toRecord">
				<img :src="icon.convert" class="icon-style" /> 兑换记录
				<span>2</span>
			</div>
			<div class="item" @click="toAddress">
				<img :src="icon.location" class="icon-style" /> 我的地址
			</div>
			<div class="item" @click="toService">
				<img :src="icon.service" class="icon-style" /> 联系客服
			</div>
		</div>
		<v-menu :index="1"></v-menu>
	</div>
</template>

<script>
	import Vue   from 'vue';
	import store from '@/store';
	import Menu  from '@/components/menu';

	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'profile',
		data() {
			return {
				headUrl : '/static/imgs/headimg.jpg',
				icon    : {
					firm     : '/static/icon/firm.png',
					award    : '/static/icon/award.png',
					convert  : '/static/icon/convert.png',
					location : '/static/icon/location.png',
					service  : '/static/icon/service.png'
				}
			}
		},
		components: {
			'v-menu' : Menu
		},
		computed: {
			user () {
				console.log('state.User.user', state.User.user)
	        	return state.User.user
	        },
	        detail() {
	        	console.log('state.User.detail', state.User.detail)
	        	return state.User.detail
	        },
	        token () {
	        	return state.User.token
	        },
	    },
		methods: {
			toCompany() {
				const url = '../company/main'
				wx.navigateTo({url}) 
			},
			toAward() {
				const url = '../award/main'
				wx.navigateTo({url})
			},
			toRecord() {
				const url = '../record/main'
				wx.navigateTo({url})
			},
			toAddress() {
				const url = '../address/main'
				wx.navigateTo({url})
			},
			toService() {
				const url = '../service/main'
				wx.navigateTo({url})
			}
		}
	}
</script>
	
