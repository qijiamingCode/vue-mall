<!--  -->
<template>
  <Swiper class="detail-swiper">
    <SwiperItem v-for='item in list' :key='item'>
        <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'


export default {
  data () {
    return {
    };
  },
  props:{
      list:Array
  },

  components: {
    Swiper,
    SwiperItem
  },
}

</script>
<style scoped>
    .detail-swiper {
      margin-top: 44px;
        height: 300px;
        overflow: hidden;
    }
</style>