<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.acm" class="rec">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array
    }
  }
};
</script>
<style>
.recommend {
  display: flex;
  font-size:12px;
  text-align: center;
  margin-top: 8px;
  padding-bottom: 10px;
  border-bottom: 6px solid #eee;
}

.rec {
  flex: 1;
}

.recommend img {
  width: 63px;
  height: 63px;
  margin-bottom: 5px;
}
</style>