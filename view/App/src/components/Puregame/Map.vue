<template>
    <div id="container">
11
    </div>
</template>

<script>
    export default {
        name: "Map",
      methods:{
          map(){

          }
      },
      created:function(){
        let mapObj = new AMap.Map('container', {//'map-location'是对应页面盒子的id
          resizeEnable: true, //自适应大小
          zoom: 13//初始视窗
        });
        // AMap是高德地图的构造函数，这里.Map是创建地图，.Marker是创建坐标点
        marker = new AMap.Marker({
          map: _this.mapObj,
          position: new AMap.LngLat('121.47,31.23') //此处根据页面数据可以直接传入经纬度进行描点
        })
      }

    }
</script>

<style scoped>
#container{
  width: 80%;
  height: 300%;
  background-color: red;
}
</style>
