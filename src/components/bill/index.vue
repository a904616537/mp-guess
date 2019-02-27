<template>
	<div class="item">
		<div class="title">{{data._id.year}}.{{data._id.month}}.{{data._id.day}}</div>
		<div v-for="(item, index) in data.order" :key="index" class="text">
			<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
			<div class="num-style">&#43  ¥{{item.total}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'bill-item',
		data() {
			return {	
				income: '/static/icon/income.png'
			}
		},
		props : {
			data : []
		}
	}
</script>
