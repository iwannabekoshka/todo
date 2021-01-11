<template>
	<div class="login-form">
		<h2>Sign up</h2>
		<input type="text" placeholder="Login"
			   v-model="login"
		>
		<input type="password" placeholder="Password"
			   v-model="password"
		>
		<input type="email" placeholder="Email"
			   v-model="email"
		>

		<div class="login-register">
			<span class="btn-enter"
				  @click="signUp()">
				Sign in
			</span>

			<span id="register">
				Already registered?
				<a @click.prevent="changeForm">Log in</a>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Register",
		props: ['registered'],
		data() {
			return {
				login: '',
				password: '',
				email: '',
			}
		},
		methods: {
			signUp() {
				this.$emit('sign-up', this.login, this.password, this.email)
			},
			changeForm() {
				this.$emit('change-form')
			},
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
		margin-bottom: 1.5rem;

		padding: 0.2rem 0.5rem;

		border: 1px solid #666;
		border-radius: 0;
	}

	.login-register {
		display: flex;
		flex-direction: column;
	}
	.btn-enter {
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
	.btn-enter:hover {
		background-color: #557dc6;
	}
	#register {
		align-self: flex-end;
	}
	#register a {
		text-decoration: underline;
		color: dodgerblue;
		cursor: pointer;
	}
</style>