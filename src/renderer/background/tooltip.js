import Vue from 'vue'
let tooltip_temp_template = {
	template:'<div></div>'
};
const ToastConstructor =  Vue.extend(tooltip_temp_template);

let Mask = {
	template:`
				<!-- 带有遮罩层的模态窗   -->
				<transition name="pt-fadeinout">
					<div ref="pts" class="pt-tooltips" :style="'z-index:'+(zIndex?zIndex:1000)">
						<div class="pt-tooltips-Mask"></div>
						<div class="pt-tooltips-content" >
							<div class="pt-tooltips-holder" :class="{'pt-tooltips-holder-nomask':!mask}">
								<div class="pt-block-top-right" v-if="mask"></div>
								<div class="pt-block-bottom-right" v-if="mask"></div>
								<div class="pt-tooltips-background">
									<div class="pt-tooltips-close" @click="close">×</div>
									<slot></slot>
								</div>
							</div>
						</div>
					</div>
				</transition>`,
	props:['type','zIndex','styles'],
	data:function () {
		return {
			mask:true,
			radomId:'',
			closebox:{}
		}
	},
	created:function(){
		if(this.type=='nomask'){this.mask=false;}
	},
	mounted:function(){
		let that = this;

		window.closePopWindow = function () {//暴露一个关闭方法给GIS
			that.close();
		};

		this.radomId = (Math.random()*10000000).toFixed(0).toString()
		this.closebox[this.radomId]=function () {
			let e = event||window.event
			if(e.keyCode) {
				if(e.keyCode == 27) {
					that.close()
				}
			}
		}
		window.document.addEventListener('keydown',this.closebox[this.radomId]);
		this.$once('hook:beforeDestroy',()=>{
			window.document.removeEventListener('keydown',this.closebox[this.radomId]);
		})
		if(this.styles){
			let data = this.styles;
			for (let i in data){
				this.setStyle(i,this.styles[i])
			}
		}
	},
	beforeDestroy:function(){
	},
	methods:{
		close:function () {
			window.document.removeEventListener('keydown',this.keybord)
			this.$destroy(true);
			this.$el.parentNode.removeChild(this.$el);
		},
		setStyle:function (className,classNode) {/*手动设置弹窗某个class得style*/
			let target = this.$el.querySelector('.'+className);
			if(className=='pt-tooltips'){
				target=this.$refs.pts;
			}
			if(target){
				for(let i in classNode){
					target.style[i]=classNode[i];
				}
			}
		}
	}
};
Vue.component('Tooltip',Mask);/*全局注册tooltip组件，使用组件式调用*/
function showToast(options){
	/*传入参数    {render:(h)=>{
					h(component)
			  }}*/
	const toastDom = new ToastConstructor({
		el : document.createElement('div'),
		render:function (h) {/*h相当于createElement，但是又有区别，传入h备用*/
			/*h即createElement ，三个参数
			* 1. VNode，也可是component，
			* 2. option，即component的参数，data、props等
			* 3. slot，即component的子元素
			*
			* 注意事项：传props必须要外层有render函数才可使用
			* */
			return h(Mask,{props:options.tooltipprops?options.tooltipprops:''},[/*h返回Vnode代码，$slots即插入位置*/
				h(options.render,{props:options.props?options.props:''}, this.$slots.default),/*创建弹窗内容，插入到上级文件即mask的slot中*/
			])
		}
	})
	//在body中动态创建一个div元素，后面自动会把它替换成整个vue文件内的内容
	document.body.appendChild(toastDom.$el);
}

function registryTooltips (){
	//把$Tooltips这个方法添加到uve的原型中，可以直接调用，当调用的时候就是执行函数内的内容
	Vue.prototype.$Tooltips = showToast;
}

export default registryTooltips