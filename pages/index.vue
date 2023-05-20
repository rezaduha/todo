<template>
  <main>
    <div class="todo-action">
      <input class="todo-action__input" v-model="newTodo" placeholder="type your task here...">
      <button class="todo-action__submit" type="submit" @click="addNewTodo()" :disabled="newTodo === ''">Add Task</button>
    </div>
    <div class="todo-list">
      <div v-for="item in todos" class="todo-list__item">
        <input class="todo-list__item-check" type="checkbox" name="status" id="status" v-model="item.done">
        <span class="todo-list__item-text" :class="item.done ? 'done' : ''">
          {{ item.todo }}
        </span>
      </div>
    </div>
  </main>
  <div v-if="todos.length < 1" class="empty">
    Nothing to do...
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/todo';
import { storeToRefs } from 'pinia';


const todoStore = useTodoStore()
const { addTodo }= todoStore
const { todos } = storeToRefs(todoStore)
const newTodo = ref()

function addNewTodo() {
  addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #cccccc;
  font-size: 48px;
}

body {
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 12px;
  background-color: #ffffff;
}

input, button {
  border: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

input:focus, button:focus {
  outline: none;
}

.todo-action {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  gap: 12px;
  width: 480px;
  background-color: #0000ff;
  padding: 24px;
}

.todo-action__input {
  flex: 1;
  padding: 12px;
}

.todo-action__submit {
  padding: 0 8px;
  font-weight: bold;
}

.todo-action__submit:hover {
  cursor: pointer;
}

.todo-list {
  margin-bottom: 128px;
}

.todo-list__item {
  align-items: start;
  display: flex;
  padding: 12px 0;
  gap: 12px;
  border-bottom: 4px solid black;
}

.todo-list__item-check {
  min-width: 24px;
  min-height: 24px;
  appearance: none;
  border: 2px solid #999;
  cursor: pointer;
}

.todo-list__item-check:checked {
  border-color: #0000ff;
  background-color: #0000ff;
}

.todo-list__item-text {
  display: block;
  font-size: 48px;
}

.done {
  text-decoration: line-through;
  color: #999;
}
</style>