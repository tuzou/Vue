<template>
    <div class="about">
      <div class="tit">
        <img class="back" src="../../../imgs/back.png" alt="">
        <div class="text">关于我们</div>
        <img class="user" src="../../../imgs/download-5.png" alt="">
      </div>
      <Map></Map>
      <div class="tab">
        <div class="bao">
          <div class="about_zou">关于走途</div><div class="line"></div>
          <div class="certificate">资质证书</div><div class="line"></div>
          <div class="statement">免责声明</div><div class="line"></div>
          <div class="agreement">用户协议</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Map from "../Puregame/Map"
    export default {
        name: "About",
        components:{
          Map,
        },
        data(){
          return{

          }
        },
        methods:{

        },
    }
</script>

<style scoped>
  .about .tit{
    width: 100%;
    height: 58px;
    border-bottom: 2px solid rgb(215,221,226);
    line-height: 58px;
    overflow: hidden;

  }
  .about .tit .back{
    width: 10px;
    height: 18px;
    margin-left: 3%;
    float: left;
    margin-top: 5%;
  }
  .about .tit .text{
    width: 87%;
    font-size:20px;
    float: left;
    text-align: center;
    color:rgb(84, 97, 117);
  }
  .about .tit .user{
    width: 17px;
    height: 23px;
    margin-top: 5%;
    margin-right: 10px;
  }
  .about .tab{
    width: 100%;
    background-color: lightblue;
  }
  .about_zou,.certificate,.statement,.agreement,.line{
    float: left;
    height: 33px;
    line-height: 33px;
    text-align: center;
  }
  .about .line{
    height: 15px;
    width: 1px;
    background: rgb(157, 170, 184);
    margin-top: 9px;
  }
  .about .bao{
    width: 100%;
    margin: 0 auto;
    color: rgb(89,89,89);
    font-size: 14px;
    border-bottom: 1px solid rgb(221,221,221);
    overflow: hidden;
  }
  .about .about_zou{
    width: 24%;
  }
  .about .certificate{
    width: 24%;
  }
  .about .statement{
    width: 24%;
  }
  .about .agreement{
    width: 24%;
  }
  .about #container{
    width: 80%;
    margin: 0 auto;
    height: 300px;
    background-color: red;
  }

</style>
