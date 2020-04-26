<!--  -->
<template>
  <div class="home">
    <NavBar>
      <div slot="middle" class="nav-bar1">首页</div>
    </NavBar>
    <BScroll class="content" ref='scroll' :probeType='3' :click='true' :pullUpLoad='true' @scroll='contentScroll' @loadMore='loadMore'>
      <HomeSwiper :banner="banner"></HomeSwiper>
      <Recommend :recommend="recommend"></Recommend>
      <HomeFuture></HomeFuture>
      <tab-control :title="['流行','新款','其他']" class="con" @tabClick="tabClick"></tab-control>
      <Goods :goodsList="goodsList[currentType].list"></Goods>
    </BScroll>
    <BackTop @click.native = 'backClick' v-show='isShow'></BackTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/common/tabcontrol/TabControl.vue";
import BScroll from "components/common/bscroll/BScroll.vue";

import Goods from "components/content/goods/Goods.vue";
import BackTop from "components/content/backtop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper";
import Recommend from "./childComps/Recommend";
import HomeFuture from "./childComps/HomeFuture";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow:false
    };
  },
  created() {
    this.getHomedata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //正常逻辑
    tabClick(index) {
      console.log("点击了分类栏");
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    contentScroll(position){
      this.isShow = -(position.y)>1000
    },

    backClick(){
      console.log('点了回到顶部');
      this.$refs.scroll.bscroll.scrollTo(0,0,500)
      
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },

    //---------------------------请求数据的方法------------------------------------
    getHomedata() {
      getHomeMultidata().then(res => {
        console.log("----------轮播和推荐数据begin---------------------");
        console.log(res);
        console.log("----------轮播和推荐数据end---------------------");
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goodsList[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log("----------商品数据begin---------------------");
        console.log(res);
        console.log("----------商品数据end---------------------");
        // this.goodsList[type].list = res.data.data.list;
        this.goodsList[type].list.push(...res.data.data.list)
        this.goodsList[type].page += 1;
        console.log(this.goodsList[type].page);
        this.$refs.scroll.bscroll.finishPullUp();
      });
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    HomeFuture,
    TabControl,
    Goods,
    BScroll,
    BackTop
  }
};
</script>
<style scoped>
.home {
  height:100vh;
  position: relative;
}

.con {
  position: sticky;
  position: -webkit-sticky;
  top: 43px;
  z-index: 9;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
}

.content {
  position: absolute;
  top:44px;
  bottom:49px;
}
</style>

