<!--  -->
<template >
  <div class="detail" >
    <NavBar class="nav-bar">
      <div slot="left" class="left">
        <img src="~assets/image/common/back.svg" alt="" @click='backClick'>
      </div>
      <div slot="middle" class="title">
        <div v-for="(item,index) in titles"
          :key="item" class="title-item"
          :class="{active:index==currentIndex}"
          @click='itemClick(index)'>
            {{item}}
        </div>
      </div>
    </NavBar>
    <DetailSwiper :list='list'></DetailSwiper>
    <!-- 展示数据，去新建一个类放这些乱七八糟的数据，然后new一个实例对象，这样就能清晰展示了 -->
    <DetailBaseGoods :goods='goods'></DetailBaseGoods>
    <DetailShopInfo :shopInfo='shopInfo'></DetailShopInfo>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import {getDetail,Goods,ShopInfo} from 'network/detail.js'

import DetailSwiper from 'views/Detail/childComps/DetailSwiper.vue'
import DetailBaseGoods from 'views/Detail/childComps/DetailBaseGoods.vue'
import DetailShopInfo from 'views/Detail/childComps/DetailShopInfo.vue'

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0,
      list:[],
      goods:{},
      shopInfo:{}
    };
  },
  created() {
    
    //1.存iid
    this.iid = this.$route.params.iid;
    //根据iid请求数据
    getDetail(this.iid).then((res)=>{
      console.log('--------------detail数据------------------------');
      console.log(res)
        console.log('--------------detail数据结束------------------------');
    //轮播数据放入list中
      const data = res.data.result
      this.list = data.itemInfo.topImages
    //创建实例对象，展示基本商品数据
      this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
      console.log('---------------实验取到的数据-----------------');
      console.log(this.goods.title);
      console.log('---------------实验取到的数据结束-----------------');
    //创建实例对象，展示商家数据
      this.shopInfo = new ShopInfo(data.shopInfo,data.shopInfo.score)     
    })

  },
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseGoods,
    DetailShopInfo
   
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>
<style  scoped>

.detail {
  position: relative;
   height: 100vh;
   background-color: #fff;
   z-index: 9;
}

.nav-bar {
  background-color: white;
  color: black;
  border-bottom: 1px solid #eee;
}
  .title{
    display: flex;
    text-align: center;
  }

  .title-item {
    flex:1;
  }

  .active {
    color:#ff7777
  }

  .left {
    margin-top: 6px;
  }
</style>