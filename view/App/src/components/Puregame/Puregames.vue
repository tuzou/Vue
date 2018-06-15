<template>
   <!--<h1>5614564156456456456</h1>-->
    <div class="purgame">
        <div class="tit">
          <img class="back" src="../../../imgs/back.png" alt="">
          <div class="text">纯玩游</div>
          <img class="user" src="../../../imgs/download-5.png" alt="">
        </div>
      <Nav></Nav>
        <swiper style="overflow: hidden" class="scroll" :options="swiperOption" ref="mySwiper">
          <!-- slides -->

          <swiper-slide class="show"><img src="../../../imgs/e13a2388-f460-471f-839d-6f9ee07e3e02-湖边（自拍）.jpg" alt=""></swiper-slide>
          <swiper-slide class="show"><img src="../../../imgs/2ba8edb4-c5a8-419c-9a51-8b334959a1af-939ad96a-a380-423d-a83a-69325ab5a21c-西双版纳（原）.jpg" alt=""></swiper-slide>
          <swiper-slide class="show"><img src="../../../imgs/7a491d2f-10b5-46b8-beaa-3b0f60991a35-ed11560a-110a-494c-9d3c-8c858fc74bda-洱海（原1）-1.jpg" alt=""></swiper-slide>
          <swiper-slide class="show"><img src="../../../imgs/6d6b8ab0-590a-4007-92a7-4f366f68d6cd-53f79b97-8ec6-44e6-a1a9-a0b90bffe760-香格里拉碧塔海（自拍）-2.jpg" alt=""></swiper-slide>
          <swiper-slide class="show"><img src="../../../imgs/fcf2fb05-cf60-4936-af5b-8c87ab8d0de6-香格里拉（原2）.jpg" alt=""></swiper-slide>
          <swiper-slide class="show"><img src="../../../imgs/69497e1f-0ecd-4c8b-a62c-4b7c48392089-3-1.png" alt=""></swiper-slide>
        </swiper>
        <div class="recommend">
          <div class="tite">
            <div class="line"></div>
            <span class="text">必游景点推荐</span>
          </div>
          <div class="scenic">
            <div class="item" v-for="(v,k) in datas">
              <img :src="v.t_img" alt="">
              <div class="place_name">{{v.t_name}}</div>
              <span class="feature">{{v.t_note}}</span>
              <div class="pr">
                <span class="space price">￥{{v.t_price}}</span><span class="space">元起</span>
              </div>
            </div>
          </div>
        </div>
        <div class="route">
          <div class="tite">
            <div class="line"></div>
            <span class="text">纯玩游路线</span>
          </div>
          <div class="place">
            <img :src="datas[6].t_img" alt="">
            <div class="pl_con">
              <div>❤苍山感通索道+洱海游船+崇圣寺三塔+慢调大理2日跟团（丽江出发/苍洱风情/即刻出发）</div>
              <span class="al price">￥460</span><span class="al">元起</span>
              <img class="collection" src="../../../imgs/download-11.png" alt="">
            </div>
          </div>
          <div class="more">
            查看更多
          </div>
        </div>

    </div>
</template>

<script>
   import  Nav from "../navcon/Nav";
   import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Puregame",
        components:{
            Nav,
            swiper,
            swiperSlide
      },
      data() {
        return {
          swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            autoplay: 3000,
            direction : 'horizontal',
            grabCursor : true,
            setWrapperSize :true,
            autoHeight: true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.swiper-button-prev',//上一张
            nextButton:'.swiper-button-next',//下一张
            scrollbar:'.swiper-scrollbar',//滚动条
            mousewheelControl : true,
            observeParents:true,
            // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            debugger: true,
          },
          expagex: "",
          num: 0,
          Num: 0,
          datas: '',
        }
     },
      created:function(){
        this.$http.post('http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=SelectAll').then((data) => {
         this.datas = data.data[0];
         console.log(data.data[0])
        }).catch((err) => {
          console.log(err)
        })
      }
   }
</script>

<style scoped>
  /**{*/
    /*padding: 0;*/
    /*margin: 0;*/
  /*}*/

  .tit{
    width: 100%;

    height: 58px;
    border-bottom: 2px solid rgb(215,221,226);
    line-height: 58px;
    overflow: hidden;

  }
  .tit .back{
    width: 10px;
    height: 18px;
    margin-left: 3%;
    float: left;
    margin-top: 5%;
  }
  .tit .text{
    width: 87%;
    font-size:20px;
    float: left;
    text-align: center;
    color:rgb(84, 97, 117);
  }
  .tit .user{
    width: 17px;
    height: 23px;
    margin-top: 5%;
    margin-right: 10px;
  }
  .show{
    float: left;
    width: 20px;
  }
  .scroll img{
    width: 100%;
    height:200px;
  }
  .recommend{
    overflow: hidden;
    margin-top: 3%;
  }
  .recommend .line{
    background-color: rgb(44,60,109);
    width: 4px;
    height: 26px;
    float: left;
    margin-left: 2%;
  }
  .recommend .text{
    float: left;
    font-size: 20px;
    color: rgb(84, 97, 117);
    margin-left: 3%;
  }
  .recommend .tite{
    overflow: hidden;
  }
  .recommend .scenic .item img{
    width: 100%;
    height: 110px;
    border-radius: 5px;
  }
  .recommend .item{
    width: 46%;
    margin-top: 4%;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    float: left;
    margin-left: 2%;
    margin-right: 2%;
  }
  .recommend .scenic .item .place_name{
    font-size: 16px;
    color: rgb(84, 97, 117);
    width: 100%;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .recommend .scenic .item .feature{
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    width: 100%;
    color:rgb(158, 170, 184);
    font-size:14px;
  }
  .recommend .scenic .item .space{
    color: rgb(157, 170, 184);
    margin-top:1100px;
  }
  .recommend .scenic .item .price{
    color: rgb(255, 115, 97);
  }
  .recommend .scenic .item .pr{
    margin-top: 6%;
  }
  .route{
    background-color: rgb(238,242,245);
    overflow: hidden;
    margin-top: 10%;
  }
  .route .tite .line{
    background-color: rgb(44,60,109);
    width: 4px;
    height: 26px;
    float: left;
    margin-left: 2%;
  }
  .route .tite .text{
    float: left;
    font-size: 20px;
    color: rgb(84, 97, 117);
    margin-left: 3%;
  }
  .route .tite{
    overflow: hidden;
  }
  .route .place{
    margin-left: 3%;
    margin-top: 5%;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .route .place img{
    width: 40%;
    float: left;
  }
  .route .place .pl_con{
    float: left;
    width: 50%;
    margin-left: 5%;
    overflow: hidden;
    position: relative;
    height: 103px;
  }
  .route .place .pl_con div{
    color: rgb(84, 97, 117);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .route .place .pl_con .al{
    float: left;
    color: rgb(157, 170, 184);
    margin-top: 10%;
  }
  .route .place .pl_con .price{
    color:rgb(255, 115, 97);
  }
  .route .place .pl_con .collection{
    width: 10%;
    float: left;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .route .more{
    color: white;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    background-color: rgb(255, 115, 97);
    margin-bottom: 80px;
    text-align: center;
    width: 20%;
    border-radius: 15px;
    font-size: 14px;

  }


</style>
