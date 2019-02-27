<template>
	<div class="chart">
		<div class="title">
			<div>第<input class="input-style" :value="week" @confirm="confirm"/>周<img :src="search" class="search-icon" /></div>
			<div>{{startDay}}-{{endDay}}</div>
			<div class="tag">周</div>
		</div>
		<div class="inner">
			 <canvas canvas-id="ringCanvas" style="text-align:center;height:300px;width:375px;"></canvas>
		</div>
	</div>
</template>

<script>
	import wxCharts from '@/utils/wxcharts';

	export default{
		name : 'chart',
		data() {
			return {
				lineChart : null,
				search    : '/static/icon/search.png'
			}	
		},
		props: {
			week      : 5,
			categories : ['2000-01-01'],
			data       : [1000],
			startDay   : {
				type: String,
				default : '2018.10.1'
			},
			endDay : {
				type: String,
				default : '2018.10.7'
			},
			onConfirm : {
				type    : Function,
				default : () => {console.log('onConfirm')}
			}
		},
		watch: {
			data: function (val, oldVal) {
				this.updateData(this.categories, this.data);
			},
		},
		methods:{
			confirm(e) {
				console.log('e', e)
				this.onConfirm(e.mp.detail.value)
			},
			updateData(categories, data) {
				var series = [{
					name : '周订单',
					data : data,
					format(val, name) {
						return `${val.toFixed(2)}元`;
					}
				}];
				this.lineChart.updateData({
					categories : categories,
					series     : series
				});
			},
			charts(windowWidth) {
				this.lineChart = new wxCharts({
					animation: true,
					canvasId: 'ringCanvas',
					type: 'line',
					categories: ['2000-01-01'],
		            animation: true,
		            background: '#f5f5f5',
		            series: [{
						name   : '周订单',
						data   : [0],
						format : function (val, name) {
		                    return val.toFixed(2) + '元';
		                }
		            }],
		            xAxis: {
		                disableGrid: true
		            },
		            yAxis: {
		                title: '日收入 (元)',
		                format: function (val) {
		                    return val.toFixed(2);
		                },
		                min: 0
		            },
		            width: windowWidth,
		            height: 200,
		            dataLabel: false,
		            dataPointShape: true,
		            extra: {
		                lineStyle: 'curve'
		            }
				});
			}
		},
		onLoad() {
	        let windowWidth = 320;
	        try {
	            let res = wx.getSystemInfoSync();
	            windowWidth = res.windowWidth - 10;
	        } catch (e) {
	            // do something when get system info failed
	        }

	        this.charts(windowWidth)
	    }
		
	}
</script>
