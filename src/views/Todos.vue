<template>
	<div>
		<TodoAdd
				v-on:add-todo="addTodo"
		/>
		<TodoList
				v-bind:todos="todos"
				v-on:check-todo="checkTodo"
				v-on:del-todo="delTodo"
		/>
	</div>
</template>

<script>
	import TodoList from "@/components/TodoList";
	import TodoAdd from "@/components/TodoAdd";

	export default {
		name: 'Todos',
		data() {
			return {
				todos: [
					{
						id: '111',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos pariatur ratione sapiente voluptatem? Corporis incidunt iure nobis odio velit voluptatibus.',
						completed: true
					},
					{
						id: '222',
						text: 'lorem2',
						completed: false
					},
					{
						id: '333',
						text: 'lorem3',
						completed: false
					},
				],
			}
		},
		components: {
			TodoAdd,
			TodoList,
		},
		methods: {
			checkTodo(id) {
				this.todos.forEach(todo => {todo.completed = todo.id === id ? !todo.completed : todo.completed})
			},
			delTodo(id) {
				this.todos = this.todos.filter(todo => todo.id !== id)
			},
			addTodo(newTodo) {
				this.todos.push(newTodo)
			}
		}
	}
</script>

<style scoped>

</style>