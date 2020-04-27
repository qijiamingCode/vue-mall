<!--  -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-goods">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="new-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="columns">
      <span v-for="item in goods.columns" :key="item" class="columns-item">{{item}}</span>
    </div>
    <div class="serve">
      <div v-for="item in goods.services" :key="item.name" class="serve-item">
        <img :src="item.icon" v-if="item.icon" />
        <span>{{item.name}}</span>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goods: Object
  }
};
</script>
<style scoped>
.base-goods {
  border-bottom: 6px solid #eee;
  padding-bottom: 10px;
}

.title {
  padding: 10px 5px;
  color: black;
}

.price .new-price {
  padding-left: 5px;
  font-size: 24px;
  color: #ff5777;
}

.price .old-price {
  font-size: 12px;
  color: #999;
  text-decoration-line: line-through;
  margin: auto 5px;
}

.price .discount {
  font-size: 12px;
  background-color: #ff5777;
  color: #fff;
  border-radius: 30%;
  padding: 5px;
  position: relative;
  top: -3px;
}

.columns {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.serve {
  font-size: 13px;
  display: flex;
  margin-top: 20px;
}

.serve-item {
  flex: 1;
}

.serve img {
  width: 14px;
  height: 14px;
}
</style>