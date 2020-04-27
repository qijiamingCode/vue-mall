<!--  -->
<template>
  <div class="child-swiper">
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" @load="homeSwiperLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banner: {
      type: Array
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  methods: {
    homeSwiperLoad() {
      if (!this.isLoad) {
        this.$emit("homeSwiperLoad");
        this.isLoad = true
      }
    }
  }
};
</script>
<style scoped>
.child-swiper {
  margin-top: 44px;
}
</style>