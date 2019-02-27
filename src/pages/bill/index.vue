<template>
	<div class="bill">
		<div class="banner">
			<p>总收入 <span class="num-style">¥{{consume}}</span></p>
			<p class="sub-title"></p>
		</div>
		<div class="search">
			<input type="text" class="input-style" placeholder="按日期、订单搜索账单" placeholder-style="color: #888888;"/>
			<img src="/static/icon/search.png" class="search-icon" />	
		</div>
		<div class="bill-item">
			<v-bill v-for="(item, index) in list" :key="index" :data="item"></v-bill>
		</div>
	</div>
</template>

<script>
	import Vue   from 'vue';
	import store from '@/store';
	import Bill  from '@/components/bill'

	const {dispatch, commit, getters, state} = store;
	
	export default{
		name : 'bill',
		data() {
			return {

			}
		},
		computed: {
	        token () {
	        	return state.User.token
	        },
	        consume() {
	        	return state.Order.consume.total
	        },
	        list() {
	        	console.log('state.Order.date_order.slice(0, 30)', state.Order.date_order.slice(0, 30))
	        	return state.Order.date_order.slice(0, 30)
	        }
	    },
		components: {
			'v-bill' : Bill
		}
	}
</script>
