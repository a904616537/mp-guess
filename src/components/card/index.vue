<template>
<div class="card" @click="onClick">
	<div class="inner">
		<div class="title">{{title}}</div>
		<div class="count">{{num}}</div>
		<div class="progress">
			<div class="progress-bar">
				<div class="progress-container">
					<div class="progress-value" :style="'width: '+percentage+'%;'"></div>
				</div>
			</div>
		</div>	
	</div>
</div>
</template>

<script>
	import Vue from 'vue';
	export default{
		name : 'card',
		data() {
			return {
			}
		},
		props : {
			title : {
				type : String,
				default : 'Title'
			},
			num : {
				type : Number,
				default : 0
			},
			count : {
				type : Number,
				default : 60
			},
			onClick : {
				type : Function,
				default : () => {}
			}
		},
		computed: {
			percentage() {
				const val = this.num/this.count;
				return val > 1?100: val * 100
			}
		},
		components: {
		},
		methods: {
		},
		beforeMount() {
		}
	}
</script>
