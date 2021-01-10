<template>
	<div class="login-form">
		<h2>Login</h2>
		<input type="text" placeholder="Login"
			   v-model="login"
		>
		<input type="password" placeholder="Password"
			   v-model="password"
		>
		<div class="login-register">
			<span id="btn-login" @click="logIn">
				Login
			</span>

			<span id="register">
				New user?
				<a @click.prevent="register">Sign up</a>
			</span>

			<router-link to="/todos">
				Login
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		props: ['registered'],
		data() {
			return {
				login: '',
				password: '',
			}
		},
		methods: {
			logIn() {
				this.$emit('log-in', this.login, this.password)
			},
			register() {
				this.$emit('is-registered')
			}
		}
	}
</script>

<style scoped>
	h2 {
		margin-bottom: 1rem;
		font-size: 1.2rem;
	}
	.login-form {
		display: flex;
		flex-direction: column;

		margin: 0 auto;

		width: 300px;
	}
	input {
		margin-bottom: 1rem;

		padding: 0.2rem 0.5rem;

		border: 1px solid #666;
		border-radius: 0;
	}

	.login-register {
		display: flex;
		flex-direction: column;
	}
	#btn-login {
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
	#btn-login:hover {
		background-color: #557dc6;
	}
	#register {
		align-self: flex-end;
	}
	#register a {
		text-decoration: underline;
		color: dodgerblue;
	}
</style>