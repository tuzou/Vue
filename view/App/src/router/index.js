import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);
import New_file from "@/components/new_file";
import Helloworld from '@/components/Helloworld';
import Children from '@/components/Children'
export default new Router({
	mode: "history",
	routes: [{
			path: "/",
			redirect: "/Helloworld"
		},
		{
			name: 'newfier',
			path: '/new_file',
			component: New_file
		},
		{
			name: 'Children',
			path: '/Children',
			component: Children
		}
	]
});