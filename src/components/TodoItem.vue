<template>
	<div class="todo">
		<div class="todo__info">
			<input type="checkbox" class="todo__check"
				v-bind:checked="todo.completed"
				v-on:change="checkTodo"
			>
			<span class="todo__num">{{ index+1 }}</span>
			<span class="todo__text"
				v-bind:class="{ completed: todo.completed }"
			>{{ todo.title }}</span>
		</div>
		<button class="todo__del"
			v-on:click="delTodo"
		>&#215;</button>
	</div>
</template>

<script>
	export default {
		name: "Todo",
		props: ["todo", "index"],
		methods: {
			checkTodo() {
				this.$emit('check-todo', this.todo.id)
			},
			delTodo() {
				this.$emit('del-todo', this.todo.id)
			}
		}
	}
</script>

<style scoped>
	.todo {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 1rem 2rem;
		margin-bottom: 1rem;

		border: 1px solid #666
	}
	.todo__info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.todo__check,
	.todo__num,
	.todo__text {
		margin-right: 1rem;
	}

	.todo__del {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;

		width: 2rem;
		height: 2rem;
		line-height: 2rem;
		padding: 5px;

		border: none;
		border-radius: 10000px;

		background-color: red;
		color: white;

		cursor: pointer;
		transition: background-color .2s linear;
	}
	.todo__del:hover {
		background-color: #e20000;
	}
	.todo__del:active {
		outline: none;
		border: 2px solid black;
	}
	.todo__del:focus {
		outline: none;
	}

	.completed {
		text-decoration: line-through;
	}
</style>