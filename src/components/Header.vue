<template>
	<header>
		<router-link to="/">
			<h1>TODO Vue.JS</h1>
		</router-link>
		<hr>
	</header>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style scoped>
	header {
		text-align: center;
		margin-bottom: 2rem;
	}
	h1 {
		font-size: 2rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>