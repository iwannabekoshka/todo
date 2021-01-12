<template>
	<div>
		<div class="overlay" v-bind:class="{close:close}">
		</div>
		<div class="popup">
			<h2 class="popup-title">Thank you for Sign up!</h2>
			<p class="popup-text">Now you can Log In in your TodoList! Have fun!</p>
			<button class="btn-enter" @click="closePopup" v-bind:class="{close:close}">Go to Log In</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Popup",
		data() {
			return {
				close:false
			}
		},
		methods: {
			closePopup() {
				this.$emit('close', true)
			}
		}
	}
</script>

<style scoped>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;

		background-color: black;
		opacity: 50%;
	}
	.popup {
		position: fixed;
		top: 30%;
		left: 50%;
		z-index: 1000;

		text-align: center;

		width: calc(100vw*0.5);
		min-width: 15rem;
		max-width: 25rem;

		display: flex;
		flex-direction: column;

		padding: 1rem;

		background-color: white;

		transform: translate(-50%, -50%);
	}
	.popup-text {
		margin-bottom: 2rem;
	}
	.popup.close, .overlay.close {
		display: none;
	}
</style>