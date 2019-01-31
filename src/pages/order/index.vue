<template>
	<div class="order">
		<div class="bar">
			<div class="title">进行中 6</div>
			<div class="refresh">
				刷新于2018.10.22 15:41
				<img :src="icon.refresh" alt="" class="bar-icon">
			</div>
		</div>
		<div class="content">
			<div class="tab">
				<div v-for="(val, index) in tab" :key="index" class="item" @click="onTab(index)" :class="{checked: index == num}">
					<img :src="val.icon" class="tab-icon" />{{val. status}}
				</div>
			</div>	

			<orderCard v-for="(val, index) in order" :key="index" :name="val.name" :address="val.address" :status="val.status" :src="val.img" :onClick="() => toPage(val.url)"></orderCard>
			
		</div>
	</div>
</template>

<script>
	import orderCard from '@/components/order/orderCard'

	export default{
		name : 'order',
		data() {
			return {
				num : 0,
				tab: [
					{status: '进行中', icon: '/static/icon/ship-red.png', checkIcon: '/static/icon/ship.png'},
					{status: '已结束', icon: '/static/icon/delivery-red.png', checkIcon: '/static/icon/delivery.png'}
				],
				icon : {
					refresh : '/static/icon/refresh.png',
				},
				order : [
					{name: 'Jacky', address: '静安区康定路1018号逸阁大楼237室', status: '未发货', img: '/static/imgs/user.jpeg', url: '../details/main'},
					{name: 'Jay', address: '静安区康定路1018号逸阁大楼237室', status: '配送中', img: '/static/imgs/user.jpeg', url: '../details/main'},
					{name: 'Jack', address: '静安区康定路1018号逸阁大楼237室', status: '配送中', img: '/static/imgs/user.jpeg', url: '../details/main'},
					{name: 'Jack', address: '静安区康定路1018号逸阁大楼237室', status: '配送中', img: '/static/imgs/user.jpeg', url: '../details/main'},
					{name: 'Jack', address: '静安区康定路1018号逸阁大楼237室', status: '配送中', img: '/static/imgs/user.jpeg', url: '../details/main'}
				]
			}
		},
		components : {
			'orderCard' : orderCard,
		},
		methods: {
			toPage(url) {
				wx.navigateTo({url})
			},
			onTab(index) {
				this.num = index
			} 
		}
	}
</script>
