<template>
	<div class="list-box">
		<div class="title">
			<div>日期</div>
			<div>订单量</div>
			<div class="last">日收入</div>
		</div>
		<div class="form">
			<tr v-for="(item, index) in data" :key="index">
				<td>{{item._id.year}}.{{item._id.month}}.{{item._id.day}}</td>
				<td>{{item.number}}笔</td>
				<td>¥{{item.total}}</td>
			</tr>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'list-box',
		data() {
			return {}

		},
		props : {
			data : {
				type    : Array,
				default : () => ([])
			}
		}
	}
</script>
