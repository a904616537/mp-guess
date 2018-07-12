<template>
	<div class="result">
		<div class="content">
			<canvas canvas-id='testCanvas' :style="style"/>
		</div>
		<div class="result-btn">
			<img src="/static/img/save.jpg" alt="保存图片" class="btn-img" @click="onSave"/>
			<button
			class="btn"
			open-type="share">
				<img src="/static/img/share-full.jpg" alt="分享给好友" class="btn-img right" @click="start"/>
			</button>
		</div>
		<div class="float-img" style="background-image: url('/static/img/float-btn.png')"></div>
	</div>
</template>

<script>
	import Vue    from 'vue';

	const {dispatch, commit, getters, state} = Vue.store;
	export default{
		onShareAppMessage(res) {
			return {
				title    : `【${this.user.nickName}测试结果】${this.answer.desc}`,
				path     : `/pages/index/main`,
				imageUrl : this.question.picture_key
			}
	    },
		data() {
			return {
				answer_key : 0
			}
		},
		beforeMount() {
			wx.showLoading({
				title : '加载中'
			})
			this.downLoadImg(this.question.question_picture, 'question_picture', () => {
				this.downLoadImg('https://c.waguo.net/static/wxapps/images/qrcode.jpg', 'qrcode', () => {
					this.downLoadImg(this.user.avatarUrl, 'avatarUrl', () => {
						this.onInit();
					});
				});
			});
		},
		onLoad(option){
			this.answer_key = Number(option.key);
	    },
		components: {
		},
		computed: {
			style() {
				const width = state.SystemInfo.width;
				const height = state.SystemInfo.height;
				return `width : ${width - 20}px;height:540px;`
			},
			user() {
				return state.User.user
			},
	        question() {
	        	return state.Question.question || {};
	        },
	        answer() {
	        	if(this.question.answer) {
	        		const obj = this.question.answer[this.answer_key];
	        		return obj;
	        	} else return {};
	        },
	        systemInfo() {
	        	return {width : state.SystemInfo.width, height : state.SystemInfo.height};
	        }
	    },
		methods: {
			onSave() {
				wx.canvasToTempFilePath({
					width    : 320,
					height   : 520,
					canvasId : 'testCanvas',
					fileType : 'jpg',
					success(res) {
						wx.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success(res) {
								console.log(res)
								wx.hideLoading();
								wx.showToast({
									title: '保存成功',
								});
							}
						});
					}
				});
			},
			downLoadImg(netUrl, storageKeyUrl, next) {
				wx.getImageInfo({
					src : netUrl,
					success(res) {
						wx.setStorage({
							key  : storageKeyUrl,
							data : res.path,
						});
						if(next) next(res)
					},
					fail(err) {
						wx.setStorage({
							key  : storageKeyUrl,
							data : '',
						});
						if(next) next(null)
					}
				})
			},
			onInit() {
				let picture = wx.getStorageSync('question_picture'),
				qrcode      = wx.getStorageSync('qrcode'),
				avatarUrl   = wx.getStorageSync('avatarUrl'),
				marginTop   = 30,
				marginLeft  = 70,
				_width      = this.systemInfo.width - (marginLeft * 2);

				var ctx = wx.createCanvasContext('testCanvas');
				ctx.drawImage('/static/img/envelope.png', 0, 0, this.systemInfo.width - 20, 540);
				if(picture){
					ctx.drawImage(picture, (this.systemInfo.width - 200) / 2, marginTop, 200, 80)
				}

				ctx.save();
				// 头像绘制
				if(avatarUrl) {
					ctx.arc(marginLeft, 130, 15, 0, Math.PI * 2, false);
					ctx.clip();//画了圆 再剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内
					
					ctx.drawImage(avatarUrl, (marginLeft - 15), 110, 30, 30); // 推进去图片
				}
				ctx.restore();
				marginTop += 105;
				ctx.setFontSize(14)
				ctx.setTextAlign('left')
				ctx.setFillStyle('#999')
				ctx.fillText(this.user.nickName, 100, marginTop)


				marginTop += 30;
				ctx.setFontSize(16)	
				ctx.setFillStyle('#000')
				ctx.setTextAlign('left')
				ctx.fillText(`测试结果：${this.answer.text}`, 50, marginTop)


				ctx.setFontSize(14)
				ctx.setFillStyle('#999')
				const text = this.answer.desc;
				const chr =text.split("");
				let temp = '';
				let row = [];
				chr.forEach(val => {
					if(ctx.measureText(temp).width < _width) {
						temp += val;
					} else {
						temp += val;
						row.push(temp);
						temp = '';
					}
				})
				row.push(temp);

				let textTop = marginTop;
				row.forEach((val, index) => {
					if (index < 5) {
						textTop += 25;
						ctx.fillText(val, 50, textTop);
					}
				});

				marginTop += 135;
				if(qrcode) {
					ctx.drawImage(qrcode, 50, marginTop, 80, 80);
				}
				ctx.setFillStyle('#6b6b6b')
				marginTop += 40;
				ctx.fillText('长按识别二维码', 140, marginTop );
				marginTop += 20;
				ctx.fillText('一张图测试你的好色程度', 140, marginTop);
				
				ctx.draw();
				wx.hideLoading();
			}
		}
	}
</script>

<style>
	Page{
		background-color: #e7e7e7;
	}
	
	canvas {
		height : 540px;
	}
	button {
		display     : inline-block;
		border      : none;
		background  : none;
		padding     : none;
		margin      : 0;
		line-height : 0;
	}
	button::after {
		border: none;
	} 
	.result .content{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.result .title{
		color: #82a5ff;
		text-align: center;
		padding-top: 50rpx;
		margin-bottom: 20rpx;
		font-size: 36rpx;
	}
	.result .content-img{
		width: 408rpx;
		height: 272rpx;
		margin: 0 auto;
		background-size: cover;
	}
	.result .user{
		margin-left: 90rpx;
		font-size: 28rpx;
		line-height: 60rpx;
		padding: 20rpx 0;
		color: #999;
	}
	.result .user-img{
		width: 60rpx;
		height: 60rpx;
		background-color: #ccc;
		border-radius: 60rpx;
		margin-right: 20rpx;
		float: left;
		background-size: cover;
	}
	.result .inner{
		font-size: 26rpx;
		width: 420rpx;
		margin: 0 auto;
	}
	.result .inner .text{
		color: #999;
	}
	.result .footer{
		font-size       : 24rpx;
		margin-top      : 15rpx;
		display         : flex;
		height          :  200rpx;
		justify-content : center;
		align-items     : flex-start;
		flex-direction  : row;

	}
	.result .qrcode{
		width            : 120rpx;
		height           : 120rpx;
		background-color : #ccc;
		margin-right     : 20rpx;
		float            : left;
		background-size  : contain;
		background-image : url('https://c.waguo.net/static/wxapps/images/qr-code.png');
	}
	.result .qr-text{
		padding-top: 18rpx;
	}
	.result-btn{
		margin-top: 30rpx;
		text-align: center;
	}
	.result-btn .btn-img{
		width: 280rpx;
		height: 80rpx;
		margin: 0 20rpx;
		border-radius: 15rpx;
	}
	.result .float-img{
		position: fixed;
		bottom: 10rpx;
		right: 10rpx;
		width: 100rpx;
		height: 120rpx;
		background-size: cover;
	}
</style>