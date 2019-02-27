<template>
	<div class="order">
		<div class="bar">
			<div class="title">进行中 {{total}}</div>
			<div class="refresh" @click="onRefresh">
				刷新于{{time}}
				<img :src="icon.refresh" alt="" class="bar-icon">
			</div>
		</div>
		<div class="content notbottom">
			<!-- <div class="tab">
				<div v-for="(val, index) in tab" :key="index" class="item" @click="onTab(index)" :class="{checked: index == num}">
					<img :src="val.icon" class="tab-icon" />{{val. status}}
				</div>
			</div> -->
			<scroll-view
			scroll-y
			class="orderscroll"
			@scrolltolower="onLower"
			>
			<orderCard v-for="(val, index) in order" :key="index" :name="val.contactPerson" :phone="val.contactPhone" :finalAddress="val.finalAddress" :status="val.status" :src="val.headImgUrl" :onClick="() => toPage(val._id, val.finalAddress)">
			</orderCard>
			</scroll-view>
		</div>
	</div>
</template>

<script>
	import Vue       from 'vue';
	import orderCard from '@/components/order/orderCard'
	import store     from '@/store';
	import moment    from 'moment';

	const {dispatch, commit, getters, state} = store;

	export default{
		name : 'order',
		data() {
			return {
				page     : 0,
				pagesize : 10,
				url      : '',
				total    : 0,
				tab      : [
					{status: '进行中', icon: '/static/icon/ship-red.png', checkIcon: '/static/icon/ship.png'},
					{status: '已结束', icon: '/static/icon/delivery-red.png', checkIcon: '/static/icon/delivery.png'}
				],
				icon : {
					refresh : '/static/icon/refresh.png',
				},
				order   : [],
				time    : '',
				refresh : false
			}
		},
		components : {
			'orderCard' : orderCard,
		},
		computed: {
	        token () {
	        	return state.User.token
	        },
	    },
		methods: {
			onLower() {
				// 滚动到底部，页面加1
				if(!this.refresh){
					this.refresh = true;
					this.page++;
					this.request(this.url);
				}
			},
			onRefresh() {
				wx.showLoading({
					title : '加载中...'
				})
				if(!this.refresh){
					this.refresh = true;
					this.page = 0;
					this.order = [];
					this.request(this.url);
					setTimeout(() => {
						wx.hideLoading();
					}, 1000);
				}
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
			onTab(index) {
				this.num = index
			},
			request(url) {
				wx.request({
					url     : `${Vue.setting.api}${url}`,
					header  : {token : this.token},
					data    : {page : this.page, pagesize : this.pagesize},
					success : (result, req) => {
						this.order   = this.order.concat(result.data);
						this.time    = moment().format('YYYY.MM.DD h:mm');
						this.refresh = false;
					}
				})
			}
		},
		onLoad(option) {
			const obj    = Object.entries(option);
			this.total   = option.total;
			this.order   = [];
			this.refresh = true;
			if(obj.length > 2) {
				const keys = obj[2];
				this.url = `/order/${option.url}?${keys[0]}=${keys[1]}`
			} else this.url = `/order/${option.url}`;
			this.request(this.url);
		}
	}
</script>
