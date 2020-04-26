<!--  -->
<template>
  <div class="nav-bar">
      <div class="left"><slot name="left" ></slot></div>
      <div class="middle"><slot name="middle" ></slot></div>
      <div class="right"><slot name="right" ></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
</style>

<style>

    .nav-bar {
        position: fixed;
        top: 0;
        /* margin-bottom: 44px; */
        width: 100%;
        z-index: 9;
        text-align: center;
        display: flex;
        background-color: var(--color-tint);
        color: var(--color-background);
    }

    .left,.right {
        height: 44px;
        line-height: 44px;
        width:40px;
       
    }

    .middle {
        height: 44px;
        line-height: 44px;;
        flex:1;
       
    }
</style>