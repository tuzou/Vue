<template>
    <div class="selftour">
      <div class="tit">
        <img class="back" src="../../../imgs/back.png" alt="">
        <div class="text">半自助游</div>
        <img class="user" src="../../../imgs/download-5.png" alt="">
      </div>
      <Nav></Nav>
      <swiper style="overflow: hidden" class="scroll" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="show"><img src="../../../imgs/588b27c9-0cf7-41a3-bfdd-6e2726efb4ad-2018-12-13 144921-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="show"><img src="../../../imgs/43f846e8-df68-4bd5-8211-933bdecaf429-3--1.png" alt=""></swiper-slide>
        <swiper-slide class="show"><img src="../../../imgs/7a491d2f-10b5-46b8-beaa-3b0f60991a35-ed11560a-110a-494c-9d3c-8c858fc74bda-洱海（原1）-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="show"><img src="../../../imgs/7a3cd058-efd6-4b78-8412-d6b1eb445054-大理三塔（原）.jpg" alt=""></swiper-slide>
        <swiper-slide class="show"><img src="../../../imgs/fcf2fb05-cf60-4936-af5b-8c87ab8d0de6-香格里拉（原2）.jpg" alt=""></swiper-slide>
        <swiper-slide class="show"><img src="../../../imgs/07f946e3-f6e9-49dd-a578-d80dbba10e37-藏民家访表演（自怕）.jpg" alt=""></swiper-slide>
      </swiper>
      <div class="recommend">
        <div class="tite">
          <div class="line"></div>
          <span class="text">热门目的地</span>
        </div>
        <div class="scenic">
          <div class="item" v-for="(v,k) in arr">
            <img :src="v.t_img" alt="">
          </div>
        </div>
      </div>
     <div class="selected">
        <div class="tite">
          <div class="line"></div>
          <span class="text">半自助游精选</span>
        </div>
        <div class="con">
          <div class="item" v-for="(v,k) in datas">
            <img :src="v.t_img" alt="">
            <div class="introduce">
              {{v.t_name}}
            </div>
            <div class="price">
              <div class="place">{{v.t_endcity}}</div>
              <div class="pricec"><span>{{v.t_price}}</span><span style="color:rgb(162,175,188)">元起</span></div>
            </div>
          </div>
          <div class="more">
            查看更多
          </div>
        </div>
     </div>
      <div class="boot"></div>
    </div>
</template>

<script>
  import  Nav from "../navcon/Nav";
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Selftour",
        components:{
          Nav,
          swiper,
          swiperSlide,
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
          arr:[],
        }
      },
      created:function(){
        this.$http.post('http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=SelectAll').then((data) => {
          this.datas = data.data[1];
          console.log(data.data[1])
          for (var i = 0;i<this.datas.length-2;i++){
            this.arr.push(this.datas[i]);
            this.arr.reverse();


          }
          console.log(this.arr);
        }).catch((err) => {
          console.log(err)
        })
      }
    }

</script>

<style scoped>
  .selftour .tit{
    width: 100%;

    height: 58px;
    border-bottom: 2px solid rgb(215,221,226);
    line-height: 58px;
    overflow: hidden;
  }
  .selftour .tit .back{
    width: 10px;
    height: 18px;
    margin-left: 3%;
    float: left;
    margin-top: 5%;
  }
  .selftour .tit .text{
    width: 87%;
    font-size:20px;
    float: left;
    text-align: center;
    color:rgb(84, 97, 117);
  }
  .selftour .tit .user{
    width: 17px;
    height: 23px;
    margin-top: 5%;
    margin-right: 10px;
  }
  .selftour .scroll img{
    width: 100%;
    height:200px;
  }
  .selftour .show{
    float: left;

  }
  .selftour selftour .scroll img{
    width: 100%;
    height:200px;
  }
  .selftour .recommend{
    overflow: hidden;
    margin-top: 3%;
  }
  .selftour .recommend .line{
    background-color: rgb(44,60,109);
    width: 4px;
    height: 26px;
    float: left;
    margin-left: 2%;
  }
  .selftour .recommend .text{
    float: left;
    font-size: 20px;
    color: rgb(84, 97, 117);
    margin-left: 3%;
  }
  .selftour .recommend .tite{
    overflow: hidden;
  }
  .selftour .recommend .scenic .item img{
    width: 100%;
    height: 110px;
    border-radius: 5px;
  }
  .selftour .recommend .item{
    width: 46%;
    margin-top: 4%;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    float: left;
    margin-left: 2%;
    margin-right: 2%;
  }
  .selftour .recommend .scenic .item .place_name{
    font-size: 16px;
    color: rgb(84, 97, 117);
    width: 100%;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .selftour .recommend .scenic .item .feature{
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    width: 100%;
    color:rgb(158, 170, 184);
    font-size:14px;
  }
  .selftour .recommend .scenic .item .space{
    color: rgb(157, 170, 184);
    margin-top:1100px;
  }
  .selftour .recommend .scenic .item .price{
    color: rgb(255, 115, 97);
  }
  .selftour .recommend .scenic .item .pr{
    margin-top: 6%;
  }
  .selftour .selected{
    width: 100%;
    margin-top: 5%;
  }
  .selected .con{
    margin-top: 5%;
  }
  .selected .item{
    text-align: center;
    overflow: hidden;
    margin-top: 30px;
  }
  .selected .item img{
    width: 90%;
  }
  .selected .tite .line{
    background-color: rgb(44,60,109);
    width: 4px;
    height: 26px;
    float: left;
    margin-left: 2%;
  }
  .selected .tite .text{
    float: left;
    font-size: 20px;
    color: rgb(84, 97, 117);
    margin-left: 3%;
  }
  .selected .tite{
    overflow: hidden;
  }
  .selected .item .introduce{
    margin: 0 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: rgb(84, 97, 117);
    overflow: hidden;
    width: 90%;
  }
  .selected .item .price{
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 20px;
  }
  .selected .item .place{
    border: 2px deepskyblue solid;
    border-radius: 5px;
    font-size: 12px;
    color: rgb(28, 146, 206);
    float: left;
    padding: 2px 4px;
  }
  .selected .item .pricec{
    float: right;
    width: 25%;
    font-size: 14px;
    color: rgb(255, 115, 97);
  }
  .selftour .more{
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
    margin-top: 10%;
  }
  .boot{
    margin-top: 100px;
  }
</style>
