<template>
	<div class="bill-item">
		<div class="item">
			<div class="title">2018.10.23</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥300</div>
			</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥267</div>
			</div>
		</div>

		<div class="item">
			<div class="title">2018.10.22</div>
			<div class="text">
				<div class="text-style"><img :src="income"" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥220</div>
			</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥310</div>
			</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥408</div>
			</div>
		</div>

		<div class="item">
			<div class="title">2018.10.21</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥107</div>
			</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥289</div>
			</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥369</div>
			</div>
			<div class="text">
				<div class="text-style"><img :src="income" class="icon-style" />订单收入</div>
				<div class="num-style">&#43  ¥508</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		name : 'bill-item',
		data() {
			return {	
				income: '/static/icon/income.png'
			}
		}
	}
</script>
