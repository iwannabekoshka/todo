<template>
	<div class="login-form">
		<h2>Sign up</h2>

		<div class="input-block">
			<span class="input-placeholder" v-bind:class="{show:login}">Login</span>
			<input type="text" placeholder="Login"
				  v-model="login"
		></div>

		<div class="input-block">
			<span class="input-placeholder" v-bind:class="{show:password}">Password</span>
			<input type="password" placeholder="Password"
				   v-model="password"
			>
		</div>


		<div class="input-block">
			<span class="input-placeholder" v-bind:class="{show:email}">E-mail</span>
			<input type="email" placeholder="Email"
				   v-model="email"
			>
		</div>

		<div class="login-register">
			<span class="btn-enter"
				  @click="signUp()">
				Sign in
			</span>

			<span class="register">
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
				this.$emit('sign-up', this.login, this.password, this.email);
			},
			changeForm() {
				this.$emit('change-form')
			},
		}
	}
</script>

<style scoped>

</style>