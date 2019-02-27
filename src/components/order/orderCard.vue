<template>
	<div class="orderCard" @click="onClick">
		<img :src="src" class="headImg" mode="aspectFill">
		<div class="orderInfor">
			<p>收货人: {{name}} <img class="phone-icon" :src="call" @click="onCall"/></p>
			<p>收货地址: {{address}}</p>
			<p>当前状态: {{status_text}}</p>
		</div>
	</div>
</template>

<script>
	const map = new Map([
		[0, '未付款'],
		[1, '进行中'],
		[2, '已取消'],
		[3, '已完成'],
		]);
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
			finalAddress: {
				type : Object,
				default : () => ({})
			},
			status: {
				type : String,
				default : '未发货'
			},
			src: {
				type : String,
				default : '/static/imgs/user.jpeg'
			},
			phone : {
				type : String,
				default : ''
			},
			onClick: {
				type : Function,
				default : () => {}
			},
		},
		computed: {
			status_text() {
				return map.get(this.status);
			},
			address() {
				if(this.finalAddress) {
					return this.finalAddress.address
				}else return '';
			}
		},
		methods : {
			onCall() {
				wx.makePhoneCall({
					phoneNumber: this.phone,
					success(msg) {
						console.log('拨打电话', msg)
					}
				})
			}
		}
	}
</script>
