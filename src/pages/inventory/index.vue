<template>
	<div class="inventory">
		<div class="bar">
			<div class="title">今日备货总量</div>
			<div class="refresh">
				刷新于2018.10.24 12:20
				<img src="/static/icon/refresh.png" alt="" class="bar-icon">
			</div>
		</div>
		<div class="list-box">
			<div class="title">
				<div>品名</div>
				<div class="last">备货量</div>
			</div>
			<div class="form">
				<tr v-for="(val, index) in item" :key="index">
					<td class="product">{{val.product}}</td>
					<td><span>{{val.specification}}</span>{{val.qty}}</td>
				</tr>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'inventory',
		data() {
			return {
				item: [
					{product: '强弓苹果酒', specification: '330ml*24', qty: '20箱'},
					{product: '酷里酷尼传统苹果酒', specification: '330ml*24', qty: '20箱'},
					{product: '巴兰德真味精酿拉格啤酒', specification: '330ml*24', qty: '46箱'},
					{product: '杜林标', specification: '750ml', qty: '50瓶'},
					{product: '法国葫芦绿薄荷', specification: '750ml', qty: '50瓶'},
					{product: '香博法国优等力娇酒', specification: '500ml', qty: '50瓶'}
				]
			}
		}
	}
</script>

<style lang="scss">
</style>