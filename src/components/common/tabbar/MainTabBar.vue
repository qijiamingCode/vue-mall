<!--  -->
<template>
    <tabbar>
    <TabBarItem path='/home'>
      <img src="~assets/image/tabbar/home.svg" alt="" slot='icon'>
      <img src="~assets/image/tabbar/home_active.svg" alt="" slot="icon_active">
      <div slot="text">首页</div>
    </TabBarItem>
    <TabBarItem path='/category'>
       <img src="~assets/image/tabbar/category.svg" alt="" slot='icon'>
      <img src="~assets/image/tabbar/category_active.svg" alt="" slot="icon_active">
      <div slot="text">分类</div>
    </TabBarItem>
    <TabBarItem path='/cart'>
       <img src="~assets/image/tabbar/shopcart.svg" alt="" slot='icon'>
      <img src="~assets/image/tabbar/shopcart_active.svg" alt="" slot="icon_active">
      <div slot="text">购物车</div>
    </TabBarItem>
    <TabBarItem path='/profile'>
       <img src="~assets/image/tabbar/profile.svg" alt="" slot='icon'>
      <img src="~assets/image/tabbar/profile_active.svg" alt="" slot="icon_active">
      <div slot="text">我的</div>
    </TabBarItem>
  </tabbar>
</template>

<script>
import tabbar from './TabBar'
import TabBarItem from './TabBarItem'

export default {
  data () {
    return {
    };
  },

  components: {
      tabbar,
      TabBarItem
  },

}

</script>
<style lang='scss' scoped>
</style>