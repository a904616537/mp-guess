<template>
	<div class="item">
		<div class="title">
			<p>{{time}}</p>
			<p>当日接单量：{{count}}</p>
			<div v-show="!dropDown" class="drop-btn" @click="more">查看详情<img src="/static/icon/drop.png" class="icon-style" /></div>
		</div>
		<div class="inner" v-show="dropDown">
			<v-order v-for="(item, index) in data.order" :key="index"
			:src="item.headImgUrl"
			:name="item.contactPerson"
			:finalAddress="item.finalAddress"
			:status="item.status"
			:phone="item.contactPhone"
			:onClick="() => toPage(item._id, item.finalAddress)"
			>
			</v-order>
			<div class="close-btn" @click="close">收起详情<img src="/static/icon/up.png" class="icon-style" /></div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
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
 			data : {
				type    : Object,
				default : ()=>({order : []})
 			}
 		},
 		computed: {
 			time() {
 				const {year, month, day} = this.data._id;
 				return `${year}.${month}.${day}`;
 			},
 			count() {
 				return this.data.order.length
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
 			},
 			toPage(_id, address) {
				const location = `${address.city}${address.district}${address.address}`
				Vue.setting.mapsdk.geocoder({
					address : location,
					success(res) {
						const {lat, lng} = res.result.location;
						wx.navigateTo({url : `../details/main?_id=${_id}&latitude=${lat}&longitude=${lng}`})
					},
					fail(err) {
						wx.navigateTo({url : `../details/main?_id=${_id}`})
					}	
				})
				
			},
 		}
	}
</script>
