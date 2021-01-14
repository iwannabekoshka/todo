<template>
	<div class="todos">
		<TodoAdd
				v-on:add-todo="addTodo"
		/>
		<Loader  v-if="loading"/>
		<TodoList
				v-else-if="todos.length"
				v-bind:todos="sliceTodos"
				v-bind:todos-num="sliceTodosNum"
				v-on:check-todo="checkTodo"
				v-on:del-todo="delTodo"
		/>
		<p class="no-todos" v-else>No todos :( So get started and add new one!</p>

		<sliding-pagination
			:current="currentPage"
			:total="totalPages"
			@page-change="pageChangeHandler"
		></sliding-pagination>
	</div>
</template>

<script>
	import TodoList from "@/components/TodoList";
	import TodoAdd from "@/components/TodoAdd";
	import Loader from "../components/Loader";
	import SlidingPagination from 'vue-sliding-pagination'

	export default {
		name: 'Todos',
		components: {
			Loader,
			TodoAdd,
			TodoList,
			SlidingPagination,
		},
		data() {
			return {
				todos: [],
				todosNum: [],
				loading: true,

				currentPage: 1,
				totalPages: null,
				elementsOnPage: 10,
			}
		},
		mounted() {
			fetch('https://jsonplaceholder.typicode.com/todos/')
				.then(response => response.json())
				.then(json => {
					this.todos = json
					this.loading = false
				})
				.then( () => {
					this.totalPages = Math.ceil(this.todos.length / this.elementsOnPage)
					this.todos.forEach((todo, ind) => {
						this.todosNum.push(ind)
					})
				})
		},
		computed: {
			sliceTodos: function() {
				return this.todos.slice((this.currentPage - 1) * this.elementsOnPage, this.currentPage * this.elementsOnPage)
			},
			sliceTodosNum: function() {
				return this.todosNum.slice((this.currentPage - 1) * this.elementsOnPage, this.currentPage * this.elementsOnPage)
			}
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
			},
			pageChangeHandler(selectedPage) {
				if (selectedPage !== 0 && selectedPage <= this.totalPages) this.currentPage = selectedPage
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