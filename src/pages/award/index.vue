<template>
	<div class="award">
		<v-award v-for="(val, index) in list" :key="index" :startDay="val.startDay" :endDay="val.endDay" :product="val.product" :type="val.type"></v-award>
	</div>
</template>

<script>
	import Award from '@/components/card/award'
	export default{
		name : 'award',
		data() {
			return {
				list: [
					{startDay: '2018.10.11', endDay: '2018.10.18', product: '酷里酷尼传统苹果酒', type: '330ml*2'},
					{startDay: '2018.10.11', endDay: '2018.10.18', product: '酷里酷尼传统苹果酒', type: '330ml*2'},
					{startDay: '2018.10.11', endDay: '2018.10.18', product: '酷里酷尼传统苹果酒', type: '330ml*2'},
					{startDay: '2018.10.11', endDay: '2018.10.18', product: '酷里酷尼传统苹果酒', type: '330ml*2'},
					{startDay: '2018.10.11', endDay: '2018.10.18', product: '酷里酷尼传统苹果酒', type: '330ml*2'},
					{startDay: '2018.10.11', endDay: '2018.10.18', product: '酷里酷尼传统苹果酒', type: '330ml*2'}
				]
			}
		},
		components: {
			'v-award' : Award
		}
	}
</script>
