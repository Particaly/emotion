<template>
    <div class="container" :style="{background:mainfest&&mainfest.background}">
	    <Left></Left>
    </div>
</template>

<script>
	import Left from './Left'
	import background from '../background/background'
    export default {
        name: "Home",
	    data:function(){
	        return {
	            bg:null,
				mainfest:null
	        }
	    },
	    components:{
            Left
	    },
        mounted() {
        	window.vue = this;
        	this.bg = new background(this)
			this.bg.mainProcess()
			this.bg.ReadDataFromMainfest()
        },
	    methods:{
	    }
    }
</script>

<style scoped lang="scss">
.container{
    height: 100%;
}
</style>