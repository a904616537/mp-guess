<template>
	<div class="index">
		<div class="head">
			<div class="user-infor">
				<image mode="aspectFill" class="user-img" :src="user.avatarUrl"/>
				<div class="infor">
					<p class="user-name">{{user.nickName}}</p>
					<p>{{detail.company_name}}</p>
				</div>
			</div>
			<p class="income">总收入<span class="sum">¥{{consume}}</span></p>
		</div>
		<div class="search">
			<input type="text" class="input-style" placeholder="搜索订单" placeholder-style="color: #888888;"/>
			<img :src="icon.search" class="search-icon" />	
		</div>
		<div class="content">

			<v-card v-for="(val, index) in list"
			:key="index"
			:title="val.title"
			:num="val.num"
			:count="val.count"
			:onClick="() => topage(val.url)"
			:onInit="val.onInit"/>

			<div class="card" @click="inventory">
				<div class="inner item">
					<img :src="icon.choice" class="icon-style" />
					备货
				</div>
			</div>
			<div class="card" @click="bill">
				<div class="inner item">
					<img :src="icon.bill" class="icon-style" />
					账单
				</div>
			</div>

		</div>
		<v-menu :index="0"></v-menu>
	</div>
</template>

<script>
	import Vue        from 'vue';
	import Menu       from '@/components/menu';
	import Card       from '@/components/card';
	import login_help from '@/utils/login_help';
	import store      from '@/store';

	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'index',
		data() {
			return {
				icon : {
					search : '/static/icon/search.png',
					choice : '/static/icon/choice-red.png',
					bill : '/static/icon/bill.png',
				},
				
			}
		},
		components: {
			'v-menu' : Menu,
			'v-card' : Card
		},
		computed: {
			isLogin() {
				return getters.isLogin
			},
			user () {
	        	return state.User.user
	        },
	        token () {
	        	return state.User.token
	        },
	        detail() {
	        	return state.User.detail
	        },
	        consume() {
	        	return state.Order.consume.total
	        },
	        list : () => [
					{title : '今日总接单', num : state.Order.today.length, count : 10, url : `../order/main?url=today&total=${state.Order.today.length}`},
					{title : '所有未发货', num : state.Order.unfilled.length, count : 10, url : `../order/main?url=unfilled&total=${state.Order.unfilled.length}`},
					{title : '进行中', num : state.Order.status_1, count : 100, url : `../order/main?url=status&total=${state.Order.status_1}&status=1`},
					{title : '已结束', num : state.Order.status_3, count : 1000, url : `../order/main?url=status&total=${state.Order.status_3}&status=3`},
					{title : '周收入', num : `¥${state.Order.weekIncome}`, count : 1000, url : '../week/main', data : null},
					{title : '总接单', num : state.Order.total_order, count : 1000, url : '../all/main', data : null}
				]
	    },
		methods: {
			inventory() {
				const url = '../inventory/main'
				wx.navigateTo({url})
			},
			bill() {
				const url = '../bill/main'
				wx.navigateTo({url})
			},
			topage(url) {
				wx.navigateTo({url, })
			},
			getToday() {
				wx.request({
					url     : `${Vue.setting.api}/order/today`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setToDay', result.data);
					}
				})
			},
			getUnfilled() {
				wx.request({
					url     : `${Vue.setting.api}/order/unfilled`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setUnfilled', result.data);
					}
				})
			},
			getStatus1() {
				wx.request({
					url     : `${Vue.setting.api}/order/status?status=1&iscount=true`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setStatus1', result.data.data);
					}
				})
			},
			getStatus3() {
				wx.request({
					url     : `${Vue.setting.api}/order/status?status=3&iscount=true`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setStatus3', result.data.data);
					}
				})
			},
			getWeek() {
				wx.request({
					url     : `${Vue.setting.api}/order/weekIncome?week=1&iscount=true`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setWeek', result.data);
					}
				})
			},
			getDate() {
				wx.request({
					url     : `${Vue.setting.api}/order/date`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setDate', result.data);
					}
				})
			},
			getConsume() {
				wx.request({
					url     : `${Vue.setting.api}/order/consume`,
					header  : {token : this.token},
					success : (result, req) => {
						store.dispatch('setConsume', result.data);
					}
				})
			}
		},
		beforeMount() {
			this.getToday();
			this.getUnfilled();
			this.getStatus1();
			this.getStatus3();
			this.getWeek();
			this.getDate();
			this.getConsume();
			// wx.showLoading({
			// 	title : '加载中'
			// })
		}
	}
</script>
