<template>
	<div class="todos">
		<TodoAdd
				v-on:add-todo="addTodo"
		/>
		<Loader  v-if="loading"/>
		<TodoList
				v-else-if="todos.length"
				v-bind:todos="todos"
				v-on:check-todo="checkTodo"
				v-on:del-todo="delTodo"
		/>
		<p class="no-todos" v-else>No todos :( So get started and add new one!</p>
	</div>
</template>

<script>
	import TodoList from "@/components/TodoList";
	import TodoAdd from "@/components/TodoAdd";
	import Loader from "../components/Loader";

	export default {
		name: 'Todos',
		data() {
			return {
				todos: [],
				loading: true
			}
		},
		mounted() {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then(response => response.json())
				.then(json => {
					setTimeout( () => {
						// this.todos = json
						this.loading = false
					},2000)
				})
		},
		components: {
			Loader,
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
				this.todos.push(newTodo);
			}
		}
	}
</script>

<style scoped>
	.todos {
		display: flex;
		flex-direction: column;
	}
	.no-todos {
		align-self: center;
	}
</style>