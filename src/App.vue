<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList v-on:todoComplete="oneTodoComplete"></TodoList>
    <TodoFooter v-on:removeAllTodo="removeAllTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "app",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoList: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoList.push(obj);
        }
      }
    }
  },
  methods: {
    // addOneTodo(newTodo) {
    //   if (newTodo != "") {
    //     const obj = { completed: false, todo: newTodo };
    //     localStorage.setItem(newTodo, JSON.stringify(obj));
    //     this.todoList.push(obj);
    //   }
    //   return;
    // },
    oneTodoComplete(index, todo) {
      todo.completed = !todo.completed;
      localStorage.removeItem(todo.todo);
      localStorage.setItem(todo.todo, JSON.stringify(todo));
    },
    removeAllTodo() {
      localStorage.clear();
      this.todoList = [];
    }
    // removeOneTodo(index, todo) {
    //   localStorage.removeItem(todo.todo);
    //   this.todoList.splice(index, 1);
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.shadow {
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.03);
}
body {
  background-color: #e9e9e9;
  height: 100vh;
}
</style>
