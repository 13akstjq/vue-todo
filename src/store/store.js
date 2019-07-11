import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getTodoItems = () => {
  const todos = [];
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        todos.push(obj);
      }
    }
  }
  //   console.log(todos);
  return todos;
};

export const store = new Vuex.Store({
  state: {
    todoItems: getTodoItems()
  },
  mutations: {
    addTodo(state, newTodo) {
      const obj = { completed: false, todo: newTodo };
      localStorage.setItem(newTodo, JSON.stringify(obj));
      return state.todoItems.push(obj);
    },
    removeTodo(state, payload) {
      localStorage.removeItem(payload.todo.todo);
      return state.todoItems.splice(payload.index, 1);
    }
  }
});
