<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'emotion',
  }
</script>

<style>
  /* CSS */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body,#app{
    height: 100%;
    width: 100%;
  }
</style>
