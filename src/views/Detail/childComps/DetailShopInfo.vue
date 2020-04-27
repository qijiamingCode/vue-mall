<!--  -->
<template>
  <div class="detail-shop-info">
    <div class="shop">
      <img :src="shopInfo.shopLogo" alt />
      <span>{{shopInfo.name}}</span>
    </div>
    <div shop-left></div>
    <div shop-right></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shopInfo: Object
  }
};
</script>
<style scoped>
.detail-shop-info {
    padding: 25px 8px;
}

.shop {
  display: flex;
}

.shop img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid  rgba(0,0,0,.1);
  margin-right: 10px;
}

.shop span {
    line-height: 45px;
}
</style>