<template>
	<div class="add-todo">
		<h2>Todos</h2>
		<div class="add-form">
			<div class="input-block">
				<span class="input-placeholder" v-bind:class="{show:title}">Add new todo</span>
				<input type="text" id="text-add" placeholder="Write your todo here..."
					  v-model="title"
				>
			</div>
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
						title: this.title,
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
	.add-todo {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin-bottom: 1rem;
	}
	.add-form {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.input-block {
		margin-right: 1rem;
	}
	input[type="text"] {
		margin: 0;
	}
	#btn-add {
		padding: var(--input-padding-top) calc(var(--input-padding-left) * 6);

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