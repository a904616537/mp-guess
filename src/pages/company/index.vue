<template>
	<div class="company">
		<div class="item">
			<div class="label">公司名称</div>
			<div class="infor">{{detail.company_name}}</div>
		</div>
		<div class="item">
			<div class="label">公司属性</div>
			<div class="infor">{{detail.company_type}}</div>
		</div>
		<div class="item">
			<div class="label">注册时间</div>
			<div class="infor">2018.01.01</div>
		</div>
		<div class="item">
			<div class="label">营业执照</div>
			<image class="img-style" mode="scaleToFill" :src="detail.businesslicense.link">
			</image>
		</div>
	</div>
</template>

<script>
	import store from '@/store';
	const {dispatch, commit, getters, state} = store;
	export default{
		name : 'company',
		data() {
			return {

			}
		},
		computed: {
	        detail() {
	        	return state.User.detail
	        },
	    }
	}
</script>
