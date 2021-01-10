<template>
	<div>
		<Login
			v-if="isRegistered"
			v-bind:registered="registered"
			v-on:log-in="logIn"
			v-on:is-registered="isRegistered"
		/>
	</div>
</template>

<script>
	import Login from "../components/Login";
	export default {
		name: "Home",
		components: {Login},
		data() {
			return {
				login: '',
				password: '',
				registered: true
			}
		},
		methods: {
			logIn(login, password) {
				console.log(login, password)
			},
			isRegistered() {
				this.registered = !this.registered;
				console.log(this.registered)
			},
		}
	}
</script>

<style scoped>

</style>