<template>
	<div class="add-todo">
		<h2>Add todo todo</h2>
		<div class="add-form">
			<input type="text" id="text-add" placeholder="Write your todo here..."
				v-model="title"
			>
			<button id="btn-add"
				v-on:click="addTodo"
			>Add</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TodoAdd",
		data() {
			return {
				title: ''
			}
		},
		methods: {
			addTodo() {
				if (this.title.trim()) {
					const newTodo = {
						id: `${Date.now()}`,
						text: this.title,
						completed: false
					};

					this.$emit('add-todo', newTodo);
					this.title = '';
				}
			}
		}
	}
</script>

<style scoped>
	h2 {
		margin-bottom: 1rem;
		font-size: 1.2rem;
	}
	.add-todo {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin-bottom: 1rem;
	}
	.add-form {
		display: flex;
		justify-content: space-between;
	}
	input[type="text"] {
		padding: 0.2rem 0.5rem;
		margin-right: 1rem;
		width: 90%;

		border: 1px solid #666;
		border-radius: 0;
	}
	#btn-add {
		padding: 0.5rem 1rem;

		border: none;
		background-color: cornflowerblue;
		color: white;

		cursor: pointer;
		transition: background-color .2s linear;
	}
	#btn-add:hover {
		background-color: #557dc6;
	}
</style>