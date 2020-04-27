<!--  -->
<template>

       <div class="goods-item">
          <img :src="this.goods.show.img" alt="" @load='imageLoad' @click='itemClick' >
          <div class="goods-info">
              <p>{{goods.title}}</p>
              <span class="price">￥{{goods.price}}</span>
              <span class="cfav">{{goods.cfav}}</span>
          </div>
      </div>

</template>

<script>
export default {
  data () {
    return {
        
    };
  },
  props:{
      goods:Object
  },
  methods:{
      imageLoad(){
          this.$bus.$emit('imageLoad')
      },
      itemClick(){
          this.$router.push('/detail'+this.goods.iid)
      }
      
  }

}

</script>
<style scoped>
     .goods-item {
        width:48%;
        margin-top: 2px;
        padding-bottom: 40px;
        position: relative;
    }

    .goods-item img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .goods-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8px;
        overflow: hidden;
        font-size: 12px;
        text-align: center;    
    }

  .goods-info p{
        overflow: hidden;
        /* 文本隐藏 */
        text-overflow: ellipsis;
        /* 文本不换行 */
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .price {
        margin-right: 3px;
        color:var( --color-tint)
    }

.cfav {
    margin-left: 15px;
    position: relative;
}

    .cfav::before {
        content:'';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url('~assets/image/common/collect.svg') 0 0/14px 14px;
    }
</style>