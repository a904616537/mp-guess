<template>
	<div class="week-income">
		<div class="banner">
			<p>第五周: <span class="num-style">¥1000</span></p>
			<p class="sub-title">总收入: ¥40789</p>
		</div>
		<div class="chart-style">
			<v-chart :week="chart.week" :startDay="chart.startDay" :endDay="chart.endDay"></v-chart>	
		</div>
		<div class="list-style">
			<v-list></v-list>
		</div>
		
	</div>
</template>

<script>
	import Chart from '@/components/week/chart'
	import List from '@/components/week/index'

	export default{
		name : 'week-income',
		data() {
			return {
				chart : {
					week : '5',
					startDay : '2018.10.15',
					endDay : '2018.10.21'
				}
			}
		},
		components: {
			'v-chart' : Chart,
			'v-list' : List
		},
		methods: {

		}
	}
</script>
