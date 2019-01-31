<template>
	<div class="bill">
		<div class="banner">
			<p>总收入 <span class="num-style">¥40789</span></p>
			<p class="sub-title"></p>
		</div>
		<div class="search">
			<input type="text" class="input-style" placeholder="按日期、订单搜索账单" placeholder-style="color: #888888;"/>
			<img src="/static/icon/search.png" class="search-icon" />	
		</div>

		<v-bill></v-bill>
	</div>
</template>

<script>
	import Bill from '@/components/bill'
	
	export default{
		name : 'bill',
		data() {
			return {

			}
		},
		components: {
			'v-bill' : Bill
		}
	}
</script>
