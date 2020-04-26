<!--  -->
<template>
  <div class="tab-bar-item" @click="jump(path)">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon_active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // isActive(){
        //     return false
        // }
    }
  },
  props:{
      path:{
          type:String
      }
  },
  methods: {
    jump(path) {
      this.$router.replace(path);
    }
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
          return this.isActive?{color:'red'}:{}
      }
  }
};
</script>
<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item img {
  margin-top: 5px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>