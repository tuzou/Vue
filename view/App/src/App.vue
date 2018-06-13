<template>
	<div id="app">
		<router-view></router-view>
		<router-link tag="span" :to="{path:'new_file',query:{age:13}}">点击我跳转</router-link>
		<HelloWorld @changemessage='message' :src='666666'></HelloWorld>
		<button @click="judge"> 点击我跳转路由 </button>
		<User></User>
		<span ref='ccc'>啦啦啦啦啦</span>
		<router-link tag='span' :to="{path:'/Children'}">点我跳转</router-link>
	</div>
</template>
<script>
	//引入
	import HelloWorld from "./components/HelloWorld";
	import User from "./components/hhh";
	export default {
		data: function() {
			return {
				age: '5555',
				users: '呵呵'
			}
		},
		name: "App",
		//注册
		components: {
			HelloWorld,
			User
		},
		methods: {
			message(num) {
				this.$refs.ccc.innerHTML = num;
			},
			judge: function() {
				this.$router.push({
					path: '/new_file?=' + this.user
				})
			}
		},
		watch: {
			'$route' (to, from) {
				console.log(to.fullPath)
			}
		}
	};
</script>
<style>

</style>