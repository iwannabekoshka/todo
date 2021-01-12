<template>
	<div id="app">
		<Header />

		<main class="main">
			<router-view/>
		</main>

		<Footer />
	</div>
</template>

<script>
	import Header from "./components/Header";
	import Footer from "./components/Footer";

	export default {
		name: 'App',
		components: {
			Footer,
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

		--input-padding-top: 0.5rem;
		--input-padding-left: 0.2rem;
	}
	h2 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;

		align-self: center;
	}
	input[type=text], input[type=password], input[type=email] {
		margin-bottom: 2rem;
		padding: var(--input-padding-top) var(--input-padding-left);

		border: none;
		border-bottom: 1px solid #666;
		border-radius: 0;
		background-color: transparent;

		width: 100%;
	}
	input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
		outline: none;
		border-bottom: 2px solid dodgerblue;
		padding-bottom: calc(var(--input-padding-top) - 1px);
	}
	input[type=text]::placeholder, input[type=password]::placeholder, input[type=email]::placeholder {
		color: transparent;
	}
	.input-block {
		position: relative;
		width: 100%;
	}
	.input-placeholder {
		position: absolute;
		top: calc(var(--input-padding-top)/2 + 0.25rem);
		left: calc(var(--input-padding-left) + 1px);
		z-index: -1;

		color: #777;
		font-weight: normal;

		transition: 0.5s;

		user-select: none;
	}
	.input-placeholder.show {
		color: black;
		font-weight: bold;
		transform: translateY(calc( var(--input-padding-top) * (-3.5) ));
	}

	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;

		margin: 0 auto;
		width: 80%;
	}
	.main {
		margin: 0px auto;
		width: 100%;
		max-width: 800px;
		flex: 1 0 auto;
	}

	@media(max-width: 320px) {
		* {
			font-size: 12px;
		}
	}
</style>
