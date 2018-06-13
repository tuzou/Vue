import Vue from "vue";
import App from "./App";
import router from "./router";
import Store from "./store";
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	Store,
	components: {
		App
	},
	template: "<App/>"
});