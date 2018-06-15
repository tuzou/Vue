import Vue from "vue";
import App from "./App";
import router from "./router";
import Store from "./store";
import Axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	Store,
	components: {
		App,
	},
	template: "<App/>"
});
