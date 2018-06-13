<template>
	<div>
		<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587829194,3708901653&fm=27&gp=0.jpg" alt="" />
		<h1>{{this.$route.query.age}}</h1>
	</div>
</template>

<script>
	export default {
		name: "new_file",
		data: function() {
			return {
				age: "我是hello组件"
			};
		},
		created: function() {
			console.log(window.location.href)
		}
	}
</script>

<style scoped>

</style>