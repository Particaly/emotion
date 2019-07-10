<template>
    <div class="component-home" :style="{background:mainfest&&mainfest.background}">
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
            Left:Left
	    },
        mounted() {
        	window.vue = this;
        	// let bg = new background(this);
			// bg.mainProcess();
			 console.log(this.$store.state.Mainfest);
        },
	    methods:{
	    }
    }
</script>

<style scoped="scoped" lang="scss">
.component-home{
	width: 100%;
    height: 100%;
}
.container{
	background: #000;
	height: 100%;
	width: 100%;
}














*{}
</style>