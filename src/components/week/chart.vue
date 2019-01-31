<template>
	<div class="chart">
		<div class="title">
			<div>第<input class="input-style"  placeholder="5" :v-modal="week" />周<img :src="search" class="search-icon" /></div>
			<div>{{startDay}}-{{endDay}}</div>
			<div class="tag">周</div>
		</div>
		<div class="inner">
			
		</div>
	</div>
</template>

<script>
	import wxCharts from '@/utils/charts.js';

	export default{
		name : 'chart',
		data() {
			return {
				search: '/static/icon/search.png'
			}	
		},
		props: {
			week : {
				type: Number,
				default : '1'
			},
			startDay : {
				type: String,
				default : '2018.10.1'
			},
			endDay : {
				type: String,
				default : '2018.10.7'
			}
		}
	}
</script>
