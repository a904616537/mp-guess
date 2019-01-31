<template>
	<div class="all-order">
		<div class="banner">
			<p>总接单: <span class="num-style">409</span></p>
			<p class="sub-title">今日: 5</p>
		</div>
		<div class="search">
			<input type="text" class="input-style" placeholder="搜索订单" placeholder-style="color: #888888;"/>
			<img src="/static/icon/search.png" class="search-icon" />	
		</div>

		<v-order></v-order>

	</div>
</template>

<script>
	import allOrder from '@/components/order/allOrder'

	export default{
		name : 'all-order',
		data() {
			return {

			}
		},
		components: {
			'v-order' : allOrder
		}
	}
</script>
