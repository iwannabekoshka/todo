<template>
	<div>
		<Login
			v-if="registered"
			v-bind:registered="registered"
			v-on:log-in="logIn"
			v-on:change-form="changeForm"
		/>
		<Register
			v-else
			v-bind:registered="registered"
			v-on:sign-up="signUp"
			v-on:change-form="changeForm"
		/>
	</div>
</template>

<script>
	import Login from "../components/Login";
	import router from "../router";
	import Register from "../components/Register";
	export default {
		name: "Home",
		components: {Register, Login},
		data() {
			return {
				login: '',
				password: '',
				registered: true
			}
		},
		methods: {
			logIn(login, password) {
				console.log(`login ${login} ${password}`)
				router.push('/todos')
			},
			signUp(login, password, email) {
				console.log(`signup ${login} ${password} ${email}`)
			},
			changeForm() {
				this.registered = !this.registered;
				console.log(`registered: ${this.registered}`)
			},
		}
	}
</script>

<style scoped>

</style>