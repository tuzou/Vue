<template>
    <div class="themetour">
      <div class="tit">
        <img class="back" src="../../../imgs/back.png" alt=""  @click="go">
        <div class="text">查看更多</div>
        <img class="user" src="../../../imgs/download-5.png" alt="">
      </div>
      <Nav></Nav>
      <div class="classification">
        <div class="bao">
          <div class="all">全部</div><div class="line"></div>
          <div class="price">价格</div><div class="line"></div>
          <div class="num">天数</div>
        </div>
      </div>
      <div style="overflow: hidden" class="con">
        <div class="item" v-for="(v,k) in datas">
          <img :src="v.t_img" alt="">
          <div style="overflow: hidden;width: 60%;float: left" class="introduce">
            <span class="na">{{v.t_name}}</span>
            <img style="float: right;" class="collect" src="../../../imgs/download-11.png" alt="">
            <div class="price">
              <span style=" margin-left: 5%;float: left;color:rgb(255, 115, 97); ">￥{{v.t_price}}</span><span style="float: left;color: rgb(157, 170, 184);">元起</span><div class="btn">立即预定</div>
            </div>
          </div>
        </div>
      </div>
      <div class="boot"></div>
    </div>
</template>

<script>
  import  Nav from "../navcon/Nav";
    export default {
        name: "Themetour",
        components:{
          Nav,
        },
         data() {
          return {
            datas:"",
           }
         },
      created:function(data){
        this.$http.post('http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=All').then((data) => {
          this.datas = data.data;
          console.log(data.data);
        }).catch((err) => {
          console.log(err)
        })
      },
      methods:{
          go:function () {
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  .themetour .tit{
    width: 100%;
    height: 58px;
    border-bottom: 2px solid rgb(215,221,226);
    line-height: 58px;
    overflow: hidden;

  }
  .themetour .tit .back{
    width: 10px;
    height: 18px;
    margin-left: 3%;
    float: left;
    margin-top: 5%;
  }
  .themetour .tit .text{
    width: 87%;
    font-size:20px;
    float: left;
    text-align: center;
    color:rgb(84, 97, 117);
  }
  .themetour .tit .user{
    width: 17px;
    height: 23px;
    margin-top: 5%;
    margin-right: 10px;
  }
  .themetour .boot{
    margin-bottom: 100px;
  }
  .themetour .classification{
    width: 100%;
    background-color: lightblue;
  }
  .themetour .all,.num,.price,.line{
    float: left;
    height: 33px;
    line-height: 33px;
    text-align: center;
  }
  .themetour .line{
    height: 15px;
    width: 1px;
    background: rgb(157, 170, 184);
    margin-top: 9px;
  }
  .themetour .classification .bao{
    margin: 0 auto;
    color: rgb(89,89,89);
    font-size: 14px;
    border-bottom: 1px solid rgb(221,221,221);
    overflow: hidden;
  }
  .themetour .all{
    width: 33%;
  }
  .themetour .price{
    width: 33%;
  }
  .themetour .num{
    width: 33%;
  }
  .themetour .con{
    width: 100%;
    margin-top: 5%;
  }
  .themetour .con .item{
    width: 100%;
    overflow: hidden;
    margin-top: 6%;

  }
  .themetour .con .item img{
    width: 30%;
    height: 100px;
    float: left;
    margin-left: 3%;
  }
  .themetour .con .item .introduce{
    color: rgb(84, 97, 117);
    font-size: 14px;
  }
  .themetour .con .item .collect{
    width: 23px;
    height: 23px;
  }
  .themetour .con .item .na{
    text-align: left;
    margin-left: 5%;
    display:block;
  }
  .themetour .con .item .btn{
    float: right;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    text-align: center;
    color: rgb(255, 255, 255);
    background: rgb(255, 115, 97);
    border-radius: 3px;
    margin-top: 6px;
    padding-left: 5px;
    padding-right: 5px;

  }
  .themetour .con .item .price{
    overflow: hidden;
    width: 100%;
    margin-top: 10px;
  }


</style>
