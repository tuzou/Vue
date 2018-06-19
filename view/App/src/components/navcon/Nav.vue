<template>
    <div>
      <div class="search">
        <span style="float: left;margin-left: 5%;font-size: 12px;color: rgb(84, 97, 117)">搜索</span>
        <div class="bao"><img class="bigimg" src="../../../imgs/download-6.png" alt=""><div class="xian"></div><input placeholder="搜索目的地和关键字" type="text"></div>
        <span class="cancel">取消</span>
      </div>
      <div class="pur_nav">
        <div class="all purgame_btn"><img src="../../../imgs/download-7.png" alt=""><span>纯玩游</span></div>
        <div class="all selftour_btn"><img src="../../../imgs/download-8.png" alt=""><span>半自助游</span></div>
        <div class="all vip_btn"><img src="../../../imgs/download-9.png" alt=""><span>VIP定制</span></div>
        <div class="all themetour_btn"><img src="../../../imgs/download-10.png" alt=""><span>主题游</span></div>
      </div>
    </div>
</template>

<script>
  import  Nav from "../navcon/Nav";
    export default {
        name: "Nav"
    }
</script>

<style scoped>
  ::-webkit-input-placeholder{
    color: rgb(187,187,187);
  }
  .search{
    width: 100%;
    height: 54px;
    border-bottom: 2px solid rgb(215,221,226);
    line-height: 54px;
    overflow: hidden;
  }
  .search .bao{
    float: left;
    background-color: rgb(229,229,229);
    line-height: 25px;
    height:25px;
    width: 64%;
    border-radius: 15px;
    margin-top: 15px;
    margin-left: 8%;
    overflow: hidden;
  }
  .search input{
    background-color: rgb(229,229,229);
    border: 0;
    height:25px;
    width: 64%;
    margin-left: 5px;
    outline:none;
  }
  .search .bigimg{
    width: 13px;
    height: 13px;
    margin-left: 3px;
    float: left;
    margin-top: 7px;
  }
  .search .xian{
    float: left;
    background-color: rgb(82,96,116);
    width: 2px;
    height: 10px;
    margin-top: 8px;
    margin-left: 7px;
  }
  .search .cancel{
    font-size: 12px;
    color: rgb(84, 97, 117);
    margin-left: 5%;

  }
  .pur_nav{
    width: 100%;
    height: 58px;
    line-height: 58px;
    border-bottom: 2px solid rgb(215,221,226);
    overflow: hidden;
  }
  .pur_nav img{
    width: 19px;
    height: 19px;
    vertical-align: middle;
  }
  .pur_nav .all{
    float: left;
    margin-left: 4%;
    font-size: 12px;
    width: 80px;
    height: 40px;
  }
  .pur_nav span{
    margin-left:10%;
  }
</style>
