<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="item" class="tab-item" :class="currentIndex==index?'active':''" @click='itemClick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentIndex:0
    };
  },
  props: {
    title: Array
  },
  methods:{
      itemClick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
      }
  }
};
</script>
<style scoped>
    .tab-control {
        margin-top: 10px;
        display: flex;
        text-align: center;
    }

    .tab-item {
        flex: 1;
    }

    .active {
        color:var(--color-tint);
    }

    .active span {
        padding-bottom: 5px;
         border-bottom: 1px solid var(--color-tint);
    }
</style>