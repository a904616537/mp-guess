<template>
	<div class="index">
		<div class="head">
			<div class="user-infor">
				<image mode="aspectFill" class="user-img" :src="avatar"/>
				<div class="infor">
					<p class="user-name">Jacky</p>
					<p>上海福哇啦信息科技有限公司</p>
				</div>
			</div>
			<p class="income">总收入<span class="sum">¥40789</span></p>
		</div>
		<div class="search">
			<input type="text" class="input-style" placeholder="搜索订单" placeholder-style="color: #888888;"/>
			<img :src="icon.search" class="search-icon" />	
		</div>
		<div class="content">

			<v-card v-for="(val, index) in list" :key="index" :title="val.title" :num="val.num" :count="val.count" :onClick="() => topage(val.url)"/>

			<div class="card" @click="inventory">
				<div class="inner item">
					<img :src="icon.choice" class="icon-style" />
					备货
				</div>
			</div>
			<div class="card" @click="bill">
				<div class="inner item">
					<img :src="icon.bill" class="icon-style" />
					账单
				</div>
			</div>

		</div>
		<v-menu :index="0"></v-menu>
	</div>
</template>

<script>
	import Vue           from 'vue';
	import constact_help from '@/utils/mp-contact';
	import Menu          from '@/components/menu';
	import Card          from '@/components/card';

	const {dispatch, commit, getters, state} = Vue.store;

	export default{
		name : 'index',
		data() {
			return {
				avatar : '/static/imgs/headimg.jpg',
				icon : {
					search : '/static/icon/search.png',
					choice : '/static/icon/choice-red.png',
					bill : '/static/icon/bill.png',
				},
				list : [
					{title : '今日总接单', num : 5, count : 50, url : '../order/main'},
					{title : '所有未发货', num : 5, count : 50, url : '../order/main'},
					{title : '进行中', num : 120, count : 100, url : '../order/main'},
					{title : '已结束', num : 10, count : 10, url : '../order/main'},
					{title : '周收入', num : 400, count : 100, url : '../week/main'},
					{title : '总接单', num : 5, count : 50, url : '../all/main'}
				]
			}
		},
		components: {
			'v-menu' : Menu,
			'v-card' : Card
		},
		methods: {
			inventory() {
				const url = '../inventory/main'
				wx.navigateTo({url})
			},
			bill() {
				const url = '../bill/main'
				wx.navigateTo({url})
			},
			topage(url) {
				wx.navigateTo({url})
			}
		}
	}
</script>
