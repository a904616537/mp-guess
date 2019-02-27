<template>
	<div class="all-order">
		<div class="banner">
			<p>总接单: <span class="num-style">{{total_order}}</span></p>
			<p class="sub-title">今日: {{today_number}}</p>
		</div>
		<div class="search">
			<input type="text" class="input-style" placeholder="搜索订单" placeholder-style="color: #888888;"/>
			<img src="/static/icon/search.png" class="search-icon" />	
		</div>
		<div class="allOrder">
			<v-order v-for="(item, index) in date_order" :key="index" :data="item"></v-order>
		</div>
		

	</div>
</template>

<script>
	import Vue      from 'vue';
	import store    from '@/store';
	import allOrder from '@/components/order/allOrder';
	import moment   from 'moment';

	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'all-order',
		data() {
			return {
			}
		},
		components: {
			'v-order' : allOrder
		},
		computed: {
			date_order() {
				return state.Order.date_order.slice(0, 30);
			},
			today_number() {
				const today = moment();

				const findDay = this.date_order.find(val => moment([val._id.year, val._id.month -1, val._id.day]).isSame('2019-01-30', 'day'));
				if(findDay) return findDay.order.length;
				else return 0;
			},
			total_order() {
				return state.Order.total_order
			}
		}
	}
</script>
