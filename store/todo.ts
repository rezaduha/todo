import { defineStore } from 'pinia'
import { Todo } from '~/@types/type.todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  function addTodo(todo: string) {
    const id = Math.floor(Math.random() * 100000)
    const newTodo: Todo = {
      id: id,
      todo: todo,
      done: false
    }
    todos.value.push(newTodo)
  }

  return { todos, addTodo }
})
