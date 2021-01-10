<template>
	<div class="login-form">
		<h2>Log in</h2>
		<input type="text" placeholder="Login">
		<input type="password" placeholder="Password">
		<div class="login-register">
			<router-link to="/todos" id="btn-login">
				Login
			</router-link>

			<span id="register">
				New user?
				<a href="">Sign up</a>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home"
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
</style>