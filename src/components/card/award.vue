<template>
	<div class="award-item">
		<div class="box">
			<div class="inner">
				<div class="item">
					<div class="label">兑换券</div>
					<div class="time">{{startDay}}-{{endDay}}</div>
				</div>
				<div class="item">
					<div class="label">{{product}}</div>
					<div class="details">{{type}}</div>
				</div>
			</div>
			<div class="bottom" @click="click">立即兑换</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'award-item',
		data() {
			return {

			}
		},
		props: {
			startDay: {
				type: String,
				default: '2018.10.1'
			},
			endDay: {
				type: String,
				default: '2018.10.31'
			},
			product: {
				type: String,
				default: '轩尼诗'
			},
			type: {
				type: String,
				default: '330ml*2dd'
			},
			click: {
				type: Function,
				default: () => console.log('click convert')
			}
		}
	}
</script>
