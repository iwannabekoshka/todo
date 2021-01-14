<template>
	<div class="todo-list">
		<TodoItem
			v-for="(todo, index) of todos.slice().reverse()"
			v-bind:todo="todo"
			v-bind:num="todosNum[index]"
			v-on:check-todo="checkTodo"
			v-on:del-todo="delTodo"
		/>
	</div>
</template>

<script>
	import TodoItem from "./TodoItem";
	export default {
		name: "Todos",
		components: {TodoItem},
		props: ["todos", "todosNum"],
		methods: {
			checkTodo(id) {
				this.$emit('check-todo', id)
			},
			delTodo(id) {
				this.$emit('del-todo', id)
			}
		}
	}
</script>

<style scoped>

</style>