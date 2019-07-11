<template>
	<div class="component-menu" :style="{height:height+'px'}">
		<div class="set" :style="{lineHeight:height-5+'px'}"><i class="iconfont icon-shezhi"></i>设置</div>
		<div class="bottom" :style="{top:height+'px'}" @mousedown="checkHold" @mouseup="resetHold"><div class="bottom-border"></div></div>
	</div>
</template>

<script>
	export default {
		name: "MenuToolbar",
		data:function(){
		    return {
				hold:false,
				height:50,
		    }
		},
		methods:{
		    checkHold:function(){
				this.hold = true;
				window.addEventListener('mousemove',this.changeHeight)
		    },
			changeHeight:function(e){
		    	if(this.hold){
					this.height=e.clientY+2.5
			    }
			},
			resetHold:function () {
				this.hold = false;
				window.removeEventListener('mousemove',this.changeHeight)
			}
		}
	}
</script>

<style scoped lang="scss">
@keyframes rotates {
	0% {transform: rotate(0deg)}
	100%{transform: rotate(180deg)}
}
.component-menu{
	height: 50px;
	width: 100%;
	position: relative;
	.set{
		line-height: 48px;
		position: absolute;
		right: 50px;
		color: #e0e0e0;
		cursor: pointer;
	}
	.icon-shezhi{
		margin-right: 5px
	}
	.set:hover .icon-shezhi{
		animation: rotates 2s linear infinite;
	}
	.bottom{
		position: absolute;
		margin-top: -5px;
		height: 5px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: ns-resize;
		.bottom-border{
			width: 100%;
			height: 2px;
			background: rgba(0,0,0,0.2);
		}
	}
}
</style>