<!--  -->
<template>
  <div class="child-swiper">
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index.js";

export default {
  data() {
    return {};
  },
  props:{
      banner:{
          type:Array
      }
  },
  components:{
      SwiperItem,
      Swiper
  }
    
};
</script>
<style scoped>
  .child-swiper {
    margin-top: 44px;
  }
</style>