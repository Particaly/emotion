<template>
    <div class="component-home" :style="{background:$store.state.Mainfest.mainfest.background,cursor:cursor}">
	    <MenuToolbar @hold="cursorChange"></MenuToolbar>
	    <Left></Left>
	    <Setting></Setting>
    </div>
</template>

<script>
	import Left from './Left'
	import MenuToolbar from './MenuToolbar'
	import Setting from './Setting'
	import background from '../background/background'
    export default {
        name: "Home",
	    data:function(){
	        return {
				cursor:''
	        }
	    },
	    components:{
            Left,MenuToolbar,Setting
	    },
        mounted() {
        	window.vue = this;
        	let bg = new background(this);
			bg.mainProcess();
        },
	    methods:{
			cursorChange:function(cursor){
				this.cursor=cursor;
			}
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