import Vue from 'vue';
import VRouter from 'vue-router';
Vue.use(VRouter);
import Homepage from "@/components/Homepage/Homepages";
import  Themetour from "@/components/Puregame/Themetour";
import  Puregames from "@/components/Puregame/Puregames";
import  Selftour from "@/components/Puregame/Selftour";
import  About from "@/components/Puregame/About";
var router = new VRouter({
  routes: [{
    path: "/",
    redirect: "/Homepage"
  }, {
    name: "Homepage",
    path: '/Homepage',
    component: Homepage
  },{
    name:'Themetour',
    path:'/Themetour',
    component:Themetour
  },{
    name:'Puregames',
    path:'/Puregames',
    component:Puregames
  },{
    name:'Selftour',
    path:'/Selftour',
    component:Selftour
  },{
    name:'About',
    path:'/About',
    component:About
  }]
});
export default router;
