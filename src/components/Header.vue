<template>
	<header class="header">
		<router-link to="/">
			<h1>TODO Vue.JS + Node.JS + MongoDB</h1>
		</router-link>
	</header>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style scoped>
	.header {
		text-align: center;
		margin-bottom: 2rem;
		padding-bottom: 0.5rem;

		border-bottom: 1px solid #666;
	}
	h1 {
		font-size: 2rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>