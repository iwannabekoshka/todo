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

		width: 100%;
	}
	input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
		outline: none;
	}
	input[type=text]::placeholder, input[type=password]::placeholder, input[type=email]::placeholder {
		color: transparent;
	}
	.input-block {
		position: relative;
	}
	.input-placeholder {
		position: absolute;
		top: calc(var(--input-padding-top)/2 + 0.25rem);
		left: calc(var(--input-padding-left) + 1px);

		color: #777;
		font-weight: normal;

		transition: 0.5s;
	}
	.input-placeholder.show {
		color: black;
		font-weight: bold;
		transform: translateY(calc( var(--input-padding-top) * (-3.5) ));
	}

	#app {
		margin: 0 auto;
		width: 80%;
	}

	@media(max-width: 300px) {
		* {
			font-size: 12px;
		}
	}
</style>
