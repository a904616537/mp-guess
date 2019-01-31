<template>
	<div class="address">
		<div class="inner">
			<div class="item">
				<div class="label">联系人</div>
				<!-- <div class="text-style"></div> -->
				<input class="text-style" />
			</div>
			<div class="item">
				<div class="label">联系方式</div>
				<!-- <div class="text-style">188 1234 9876</div> -->
				<input class="text-style" />
			</div>
			<div class="item">
				<div class="label">收货地址</div>
				<!-- <div class="text-style address-infor">上海市 静安区 康定路 1018号 逸阁大楼237室</div> -->
				<input class="text-style" />
			</div>
		</div>
		<div class="btn full-btn" @click="">新增</div>
	</div>
</template>

<script>
	import Alert from '@/components/alert'

	export default{
		name : 'address',
		data() {
			return {
				isShow : false
			}
		},
		components: {
			'v-alert' : Alert
		},
		methods: {
		}
	}
</script>
