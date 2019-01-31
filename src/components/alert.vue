<template>
	<div class="alert" @click="close">
		<div class="inner">
			<div class="text-style">{{text}}</div>
			<div class="bottom" @click="enter">确定</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'alert',
		data() {
			return {

			}
		},
		props: {
			text: {
				type: String,
				default: '确认删除地址？'
			},
			close: {
				type: Function,
				default: () => console.log('close')
			},
			enter: {
				type: Function,
				default: () => console.log('确定')
			}
		}
	}
</script>
