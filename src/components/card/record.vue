<template>
	<div class="record-card">
		<div class="puplic-item">
			<div class="title">
				<div class="label">已兑换</div>
				<div class="infor">{{day}}<span>{{time}}</span></div>
			</div>
			<div class="inner">
				<div class="item">
					<div class="label">兑换内容</div>
					<div class="infor">{{product}}<span>{{type}}</span></div>
				</div>
				<div class="item">
					<div class="label">送货地址</div>
					<div class="infor">{{address}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'record-card',
		data() {
			return {

			}
		},
		props: {
			day: {
				type: String,
				default: '2018.10.30'
			},
			time: {
				type: String,
				default: '12:08'
			},
			product: {
				type: String,
				default: '酷里酷尼传统苹果酒'
			},
			type: {
				type: String,
				default: '330ml*2'
			},
			address: {
				type: String,
				default: '上海市 静安区 康定路 1018号 逸阁大楼237室'
			}
		}
	}
</script>