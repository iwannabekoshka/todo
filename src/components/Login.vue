<template>
	<div class="login-form">
		<h2> {{ fillText(registered) }} </h2>
		<input type="text" placeholder="Login"
			   v-model="login"
		>
		<input type="password" placeholder="Password"
			   v-model="password"
		>
		<input type="email"
			   v-if="!registered"
			   v-model="email"
			   placeholder="E-mail">

		<div class="login-register">
			<span class="btn-enter"
				  @click="enter(registered)">
				{{ fillText(registered) }}
			</span>

			<span id="register">
				{{ registered ? 'New here?' : 'Already registered?' }}
				<a @click.prevent="register">{{ fillText(!registered) }}</a>
			</span>
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
				email: '',
			}
		},
		methods: {
			logIn() {
				this.$emit('log-in', this.login, this.password)
			},
			signUp() {
				this.$emit('sign-up', this.login, this.password, this.email)
			},
			enter(registered) {
				if (registered) {this.logIn()} else {this.signUp()}
			},
			register() {
				this.$emit('is-registered')
			},
			fillText(registered) {
				return registered ? 'Log in' : 'Sign up'
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