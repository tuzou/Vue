<template>
	<div id="app">
    <Puregame></Puregame>
	</div>
</template>
<script>
  import Puregame from './components/Puregame/Puregames'
	export default {
		data: function() {
			return {

			}
		},
		name: "App",
		//注册
		components: {
      Puregame,
		}

	};
</script>

<style>

</style>
