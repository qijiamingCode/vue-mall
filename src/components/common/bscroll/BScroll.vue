<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      bscroll: null
    };
  },

  props:{
    probeType:Number,
    pullUpLoad:Boolean,
    click:Boolean
  },

  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click:this.click,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    this.bscroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    this.bscroll.on('pullingUp',()=>{
      this.$emit('loadMore')
    })
  }
};
</script>
<style scoped>

</style>