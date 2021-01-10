<template>
	<div id="app">
		<Header />

		<router-view />
	</div>
</template>

<script>
	import Header from "./components/Header";

	export default {
		name: 'App',
		components: {
			Header
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;

		box-sizing: border-box;

		font-size: 16px;
		font-family: monospace;
	}
	#app {
		margin: 0 auto;
		width: 80%;
	}
</style>
