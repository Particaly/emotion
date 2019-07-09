<template>
    <div class="container">
	    <Left></Left>
    </div>
</template>

<script>
	import Left from './Left'
	import background from '../background/background'
    export default {
        name: "Home",
	    components:{
            Left
	    },
        mounted() {
        	window.vue = this;
        	let bg = new background(this)
			bg.mainProcess()
        },
	    methods:{

	    }
    }
</script>

<style scoped lang="scss">
.container{
    height: 100%;
    background: rgba(10,10,10,0.7);
}
</style>