<!--  -->
<template>
  <div class="goods">
    <GoodsItem :goods="item" v-for="item in goodsList" :key="item.show.img"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";

export default {
  data() {
    return {};
  },
  props: {
    goodsList: Array
  },
  components: {
    GoodsItem
  },
  methods:{
   
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 2px;
  margin-top: 10px;
}
</style>