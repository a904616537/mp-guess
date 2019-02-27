<template>
	<div class="details">
		<div class="map">
			<map id="myMap" :markers="markers" :longitude="local.longitude" :latitude="local.latitude" scale="16" style="width: 100%; height: 190px;"></map>
		</div>
		<div class="puplic-item">
			<div class="title">服务信息</div>
			<div class="inner">
				<div class="item">
					<div class="label">
						<img src="/static/icon/terrace.png" class="label-icon" />服务平台
					</div>
					<div class="infor">DropChain</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/settle.png" class="label-icon" />结算方式
					</div>
					<div v-if="order.payment == 1" class="infor">月结</div>
					<div v-else class="infor">微信支付</div>
				</div>
			</div>
		</div>

		<div class="puplic-item">
			<div class="title">订单信息</div>
			<div class="inner">
				<div class="item">
					<div class="label">
						<img src="/static/icon/order.png" class="label-icon" />订单号
					</div>
					<div class="infor">{{order._id}}</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/user.png" class="label-icon" />联系人
					</div>
					<div class="infor">{{order.contactPerson}}</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/phone.png" class="label-icon" />联系方式
					</div>
					<div class="infor" @click="onCall">{{order.contactPhone}}<img src="/static/icon/call.png" class="call-icon" /></div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/location-red.png" class="label-icon" />送货地址
					</div>
					<div class="infor">{{order.finalAddress.city}} {{order.finalAddress.district}} {{order.finalAddress.address}}</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/time.png" class="label-icon" />下单时间
					</div>
					<div class="infor">{{time}}</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/order.png" class="label-icon" />备注
					</div>
					<div class="infor">{{order.remark}}</div>
				</div>
			</div>
		</div>

		<div class="puplic-item">
			<div class="title">商品信息</div>
			<div class="inner">
				<div class="form">
					<tr v-for="(val, index) in items" :key="index">
						<td class="product">{{val.product_name}}</td>
						<td><span>¥{{val.price}}*{{val.number}}</span>¥{{val.combined}}</td>
					</tr>
					<tr>
						<td class="product"></td>
						<td class="total"><span class="text-style">总计:</span>¥{{order.total}}</td>
					</tr>
				</div>
			</div>	
		</div>

		<div class="erweima" @click="service">
			<div v-if="order.status == 1" class="btn full-btn">结束订单</div>
			<img src="/static/icon/erweima.png" class="icon-style">
		</div>
	</div>
</template>

<script>
	import Vue       from 'vue';
	import store     from '@/store';
	import moment from 'moment';
	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'details',
		data() {
			return {
				showmap : false,
				order : {
					finalAddress : {}
				},
				items : [],
				local : {
					latitude : '121.4453000000',
					longitude  : '31.2234400000'
				},
				markers : []
			}
		},
		computed: {
	        token () {
	        	return state.User.token
	        },
	        time() {
	        	return moment(this.order.requestDateTime *1000).format('YYYY.MM.DD h:mm');
	        }
	    },
		methods: {
			service() {
				const url = '../service/main'
				wx.navigateTo({url})
			},
			onCall() {
				wx.makePhoneCall({
					phoneNumber: this.order.contactPhone,
					success(msg) {
						console.log('拨打电话', msg)
					}
				})
			},
			request(_id) {
				wx.request({
					url     : `${Vue.setting.api}/order/detail`,
					header  : {token : this.token},
					data    : {_id},
					success : (result, req) => {
						const {order, items} = result.data;
						this.order = order;
						this.items = items;
						console.log('result', result);
					}
				})
			},

		},
		onLoad(option) {
			this.request(option._id);
			console.log('option', option)
			if(option.latitude){
				this.local = {
					latitude  : option.latitude,
					longitude : option.longitude
				}
				this.markers.push({
					id        : 0,
					latitude  : option.latitude,
					longitude : option.longitude,
					width     : 50,
					height    : 50
				})
			}
			
		}
	}
</script>
