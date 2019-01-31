<template>
	<div class="record">
		<v-record v-for="(val, index) in item" :key="index" :day="val.day" :time="val.time" :product="val.product" :type="val.type" :address="val.address"></v-record>
	</div>
</template>

<script>
	import Record from '@/components/card/record'
	
	export default{
		name : 'record',
		data() {
			return {
				item : [
					{day: '2018.10.30', time: '12:08', product: '酷里酷尼传统苹果酒', type: '330ml*2', address: '上海市 静安区 康定路 1018号 逸阁大楼237室'},
					{day: '2018.10.31', time: '11:30', product: '酷里酷尼传统苹果酒', type: '330ml*2', address: '上海市 静安区 康定路 1018号 逸阁大楼237室'},
					{day: '2018.11.1', time: '14:08', product: '酷里酷尼传统苹果酒', type: '330ml*2', address: '上海市 静安区 康定路 1018号 逸阁大楼237室'},
					{day: '2018.11.2', time: '10:00', product: '酷里酷尼传统苹果酒', type: '330ml*2', address: '上海市 静安区 康定路 1018号 逸阁大楼237室'},
					{day: '2018.11.3', time: '14:58', product: '酷里酷尼传统苹果酒', type: '330ml*2', address: '上海市 静安区 康定路 1018号 逸阁大楼237室'},
					{day: '2018.11.5', time: '16:25', product: '酷里酷尼传统苹果酒', type: '330ml*2', address: '上海市 静安区 康定路 1018号 逸阁大楼237室'}
				]
			}
		},
		components: {
			'v-record' : Record
		}
	}
</script>
