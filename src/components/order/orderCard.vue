<template>
	<div class="orderCard" @click="onClick">
		<img :src="src" class="headImg" mode="aspectFill">
		<div class="orderInfor">
			<p>收货人: {{name}} <img class="phone-icon" :src="call" /></p>
			<p>收货地址: {{address}}</p>
			<p>当前状态: {{status}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'orderCard',
		data() {
			return {
				call: '/static/icon/call.png'
			}
		},
		props : {
			name: {
				type : String,
				default : 'Name'
			},
			address: {
				type : String,
				default : 'address'
			},
			status: {
				type : String,
				default : '未发货'
			},
			src: {
				type : String,
				default : '/static/imgs/user.jpeg'
			},
			onClick: {
				type : Function,
				default : () => {}
			}
		}
	}
</script>
