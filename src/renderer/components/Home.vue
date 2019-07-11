<template>
    <div class="component-home" :style="{background:$store.state.Mainfest.mainfest.background}">
	    <MenuToolbar></MenuToolbar>
	    <Left></Left>
    </div>
</template>

<script>
	import Left from './Left'
	import MenuToolbar from './MenuToolbar'
	import background from '../background/background'
    export default {
        name: "Home",
	    data:function(){
	        return {

	        }
	    },
	    components:{
            Left,MenuToolbar
	    },
        mounted() {
        	window.vue = this;
        	let bg = new background(this);
			bg.mainProcess();
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















*{}
</style>