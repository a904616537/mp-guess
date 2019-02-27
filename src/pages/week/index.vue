<template>
	<div class="week-income">
		<div class="banner">
			<p>第{{chart.week}}周: <span class="num-style">¥{{weekIncome}}</span></p>
			<p class="sub-title">总收入: ¥{{consume}}</p>
		</div>
		<div class="chart-style">
			<v-chart :week="chart.week" :onConfirm="onConfirm" :categories="categories" :data="chartData" :startDay="chart.startDay" :endDay="chart.endDay"></v-chart>	
		</div>
		<div class="list-style">
			<v-list :data="data"></v-list>
		</div>
		
	</div>
</template>

<script>
	import Vue    from 'vue';
	import store  from '@/store';
	import moment from 'moment';
	import Chart  from '@/components/week/chart'
	import List   from '@/components/week/index'

	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'week-income',
		data() {
			return {
				data : [],
				chart : {
					week     : 1,
					startDay : '2018.10.15',
					endDay   : '2018.10.21'
				},
				categories : [],
				chartData : []
			}
		},
		computed: {
	        weekIncome() {
	        	let count = 0;
	        	this.data.map(val => count += val.total);
	        	return count;
	        },
	        consume() {
	        	return state.Order.consume.total
	        },
	        token () {
	        	return state.User.token
	        },
	    },
	    watch: {
			'chart.week': function (val, oldVal) {
				this.getWeek();
			},
		},
		components: {
			'v-chart' : Chart,
			'v-list' : List
		},
		methods: {
			onConfirm(week) {
				console.log('week', week)
				this.chart.week = week;
			},
			getWeek() {
				wx.request({
					url     : `${Vue.setting.api}/order/weekIncome?week=${this.chart.week}`,
					header  : {token : this.token},
					success : (result, req) => {
						if(result.data.length == 0) {
							wx.showToast({
								title    : '没有数据',
								icon     : 'none',
								duration : 2000
							})
							return;
						}
						this.data = result.data;
						const list = result.data.reverse();
						this.categories = list.map(val=> `${val._id.month}-${val._id.day}`);
						this.chartData = list.map(val => val.total);

						const startDate = moment().week(Number(this.chart.week)).startOf('week').add(2, 'day').format('YYYY.MM.DD');
						const endDate   = moment().week(Number(this.chart.week)).endOf('week').add(2, 'day').format('YYYY.MM.DD');
						this.chart.startDay = startDate;
						this.chart.endDay = endDate;
					}
				})
			},
		},
		beforeMount() {
			this.getWeek();
		}
	}
</script>
