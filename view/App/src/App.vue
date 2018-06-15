<template>
	<div id="app">
		<Homepage></Homepage>
		<!-- <Puregame></Puregame> -->
		<div class="tabars">
			<div>
				<img src="../imgs/download.png" alt="" />
				<p>走途热点</p>
			</div>
			<div>
				<img src="../imgs/download-1.png" alt="" />
				<p>品牌文化</p>
			</div>
			<div>
				<img src="../imgs/download-2.png" alt="" />
				<p>走途微博</p>
			</div>
			<div>
				<img src="../imgs/download-3.png" alt="" />
				<p>客服咨询</p>
			</div>
		</div>
	</div>
</template>
<script>
	import Homepage from "./components/Homepage/Homepages";
	// import Puregame from "./components/Puregame/Puregames";
	export default {
		data: function() {
			return {
				data: {}
			};
		},
		name: "App",
		//注册
		components: {
			// Puregame,
			Homepage
		}
	};
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		text-align: none;
		list-style: none;
	}

	.tabars {
		width: 100%;
		height: 7vh;
		background: white;
		position: fixed;
		bottom: 0;
		overflow: hidden;
		left: 0;
	}

	.tabars>div {
		width: 25%;
		height: 100%;
		text-align: center;
		float: left;
	}

	.tabars>div>img {
		padding-top: 1vh;
		width: 20px;
		height: 20px;
	}

	.tabars>div>p {
		font-size: 13px;
		color: rgb(45, 61, 111);
	}
</style>
