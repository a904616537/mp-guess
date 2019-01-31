<template>
	<div class="allOrder">
		<div class="item">
			<div class="title">
				<p>2018.10.23</p>
				<p>当日接单量：2</p>
				<div class="drop-btn" @click="more">查看详情<img src="/static/icon/drop.png" class="icon-style" /></div>
			</div>
			<div class="inner" v-show="dropDown">
				<v-order :onClick="details"></v-order>
				<v-order :onClick="details"></v-order>
				<v-order :onClick="details"></v-order>
				<div class="close-btn" @click="close">收起详情<img src="/static/icon/up.png" class="icon-style" /></div>
			</div>
		</div>
		<div class="item">
			<div class="title">
				<p>2018.10.23</p>
				<p>当日接单量：2</p>
				<div class="drop-btn">查看详情<img src="/static/icon/drop.png" class="icon-style" /></div>
			</div>
		</div>
		<div class="item">
			<div class="title">
				<p>2018.10.23</p>
				<p>当日接单量：2</p>
				<div class="drop-btn">查看详情<img src="/static/icon/drop.png" class="icon-style" /></div>
			</div>
		</div>
		<div class="item">
			<div class="title">
				<p>2018.10.23</p>
				<p>当日接单量：2</p>
				<div class="drop-btn">查看详情<img src="/static/icon/drop.png" class="icon-style" /></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Order from '@/components/order/orderCard'

	export default{
		name : 'allOrder',
		data() {
			return {
				dropDown: false,
			}
		},
		components: {
			'v-order' : Order
 		},
 		props: {
 			more: {
 				type : Function,
 				default: () => console.log('查看详情')
 			},
 			close: {
 				type : Function,
 				default: () => console.log('收起详情')
 			}
 		},
 		methods: {
 			more() {
 				this.dropDown = !this.dropDown
 			},
 			close() {
 				this.dropDown = false
 			},
 			details() {
 				const url = '../details/main'
				wx.navigateTo({url})
 			}
 		}
	}
</script>
