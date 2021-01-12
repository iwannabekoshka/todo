<template>
	<div>
		<Login
			v-if="registered"
			v-bind:registered="registered"
			v-bind:registeredNow="registeredNow"
			v-on:log-in="logIn"
			v-on:change-form="changeForm"
		/>
		<Register
			v-else
			v-bind:registered="registered"
			v-on:sign-up="signUp"
			v-on:change-form="changeForm"
		/>
		<Popup
			v-if="registeredNow"
			v-on:close="closePopup"
		/>
	</div>
</template>

<script>
	import Login from "../components/Login";
	import router from "../router";
	import Register from "../components/Register";
	import Popup from "../components/Popup";
	export default {
		name: "Home",
		components: {Popup, Register, Login},
		data() {
			return {
				login: '',
				password: '',
				registered: true,
				registeredNow: false
			}
		},
		methods: {
			logIn(login, password) {
				console.log(`login ${login} ${password}`)
				router.push('/todos')
			},
			signUp(login, password, email) {
				console.log(`signup ${login} ${password} ${email}`)
				this.registered = true;
				this.registeredNow = true;
				console.log(`registerednow: ${this.registeredNow}`)
			},
			changeForm() {
				this.registered = !this.registered;
			},
			closePopup() {
				this.registeredNow = false;
			}
		}
	}
</script>

<style scoped>
	/deep/ .login-form {
		display: flex;
		flex-direction: column;

		margin: 0 auto;

		width: 100%;
		max-width: 300px;
	}

	/deep/ .login-register {
		display: flex;
		flex-direction: column;
	}
	/deep/ .btn-enter {
		padding: 0.5rem 1rem;
		margin-bottom: 0.5rem;

		border: none;
		background-color: cornflowerblue;
		color: white;
		text-decoration: none;
		text-align: center;

		cursor: pointer;
		transition: background-color .2s linear;
	}
	/deep/ .btn-enter:hover {
		background-color: #557dc6;
	}

	/deep/ .register {
		align-self: flex-end;
	}
	/deep/ .register a {
		text-decoration: underline;
		color: dodgerblue;
		cursor: pointer;
	}

	@media (max-width: 300px) {
		/deep/ .login-form {
			display: flex;
			flex-direction: column;

			margin: 0 auto;

			width: auto;
			max-width: 300px;
		}
	}
</style>