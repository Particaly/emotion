<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
	name: 'emotion',
    beforeCreate(){
        let ele1 = document.createElement('script')
        ele1.type="text/javascript"
        ele1.setAttribute('src',`${__static}/js/wangEditer.js`)
        document.head.appendChild(ele1)
        let ele2 = document.createElement('link')
        ele2.setAttribute('rel','stylesheet')
        ele2.setAttribute('href',`${__static}/css/iconfont.css`)
        document.head.appendChild(ele2)
    },
    mounted:function(){
    }
}
</script>

<style>
/* CSS */
*{margin:0;padding:0;box-sizing: border-box;user-select:none}
img{ display:block;border:0;}
ul,li{list-style:none;}
button,input,textarea{outline:none;border: none;}
textarea{resize: none;}
a{text-decoration:none;}
a:hover,a:focus{text-decoration: none !important;}
*::-webkit-scrollbar {/*滚动条整体样式*/
  width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
  height:5px;
}
*::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 10px;
  /*height:300px;*/
  -webkit-box-shadow: inset 0 0 5px rgba(67, 147, 204, 0.93);
  background: #535353;
}
*::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #EDEDED;
}
html,body,#app{
	height: 100%;
	width: 100%;
    min-width: 800px;
	min-height: 600px;
}
</style>
