<template>
	<div class="login-form">
		<h2>Log in</h2>

		<div class="input-block">
			<span class="input-placeholder" v-bind:class="{show:login}">Login</span>
			<input type="text" class=""
				   v-model="login"
			>
		</div>

		<div class="input-block">
			<span class="input-placeholder" v-bind:class="{show:password}">Password</span>
			<input type="password"
				   v-model="password"
			>
		</div>

		<div class="login-register">
			<span class="btn-enter"
				  @click="logIn()">
				Log in
			</span>

			<span class="register">
				New here?
				<a @click.prevent="changeForm">Sign up</a>
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
			}
		},
		methods: {
			logIn() {
				this.$emit('log-in', this.login, this.password)
			},
			changeForm() {
				this.$emit('change-form')
			},
		}
	}
</script>

<style scoped>

</style>