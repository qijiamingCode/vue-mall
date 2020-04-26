<!--  -->
<template>

  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
// import TabBarItem from './TabBarItem'

export default {
  data() {
    return {};
  },
  components:{
      
  }
};
</script>
<style>
#tab-bar {
  width: 100%;
  height: 49px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
}



</style>