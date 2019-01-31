<template>
	<div class="details">
		<div class="map">
			<map id="myMap" longitude="121.4453000000" latitude="31.2234400000" scale="14" style="width: 100%; height: 190px;"></map>
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
					<div class="infor">微信支付</div>
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
					<div class="infor">1510123456789012456</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/user.png" class="label-icon" />联系人
					</div>
					<div class="infor">Jay</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/phone.png" class="label-icon" />联系方式
					</div>
					<div class="infor">180 1234 9876<img src="/static/icon/call.png" class="call-icon" /></div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/location-red.png" class="label-icon" />送货地址
					</div>
					<div class="infor">上海市 静安区 康定路 1018号 逸阁大楼237室</div>
				</div>
				<div class="item">
					<div class="label">
						<img src="/static/icon/time.png" class="label-icon" />下单时间
					</div>
					<div class="infor">2018.10.24 16:43</div>
				</div>
			</div>
		</div>

		<div class="puplic-item">
			<div class="title">商品信息</div>
			<div class="inner">
				<div class="form">
					<tr v-for="(val, index) in item" :key="index">
						<td class="product">{{val.product}}</td>
						<td><span>{{val.specification}}</span>{{val.count}}</td>
					</tr>
					<tr>
						<td class="product"></td>
						<td class="total"><span class="text-style">总计:</span>¥2801</td>
					</tr>
				</div>
			</div>	
		</div>

		<div class="erweima" @click="service">
			<img src="/static/icon/erweima.png" class="icon-style">
		</div>
	</div>
</template>

<script>
	export default{
		name : 'details',
		data() {
			return {
				item: [
					{product: '美格娜斯大苹果酒', specification: '¥420*1', count: '¥420'},
					{product: '库铂斯绿牌艾尔啤酒', specification: '¥280*3', count: '¥840'},
					{product: '酩悦粉红香槟(酩悦玫瑰香槟)', specification: '¥280*3', count: '¥840'},
					{product: '仙山露阿斯蒂', specification: '¥105*1', count: '¥105'},
					{product: '巴黎之花香槟', specification: '¥298*2', count: '¥596'}
				]
			}
		},
		methods: {
			service() {
				const url = '../service/main'
				wx.navigateTo({url})
			},
		}
	}
</script>
