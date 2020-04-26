<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from 'components/common/tabbar/MainTabBar.vue'
  export default {
    name:'App',
    components:{
      MainTabBar
    }
  }

</script>



<style>
  @import url('assets/css/base.css');
</style>
