<template>
	<div>
		<h1 @click='message'>
        {{age}}
      </h1>
		<!--<p>{{src}}</p>-->
	</div>
</template>
<script>
	export default {
		name: "ComA",
		//		props: ["src"],
		data: function() {
			return {
				age: "我是hello组件"
			};
		},
		methods: {
			message() {
				this.$emit("changemessage", this.age);
			}
		}
	};
</script>

<style scoped>

</style>