<template>
  <div class="todo-container">
    <ul class="todo-list">
      <li
        v-for=" (todo,index) in this.$store.state.todoItems "
        :key="todo.index"
        class="todo shadow"
      >
        <span
          v-on:click="todoComplete(index,todo)"
          class="check"
          v-bind:class="{completed : todo.completed}"
        >
          <i class="fas fa-check"></i>
          {{todo.todo}}
        </span>
        <span v-on:click="removeTodo(index,todo)">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(index, todo) {
      this.$store.commit("removeTodo", { index, todo });
      // this.$emit("removeTodo", index, todo);
    },
    todoComplete(index, todo) {
      this.$emit("todoComplete", index, todo);
    }
  }
};
</script>

<style>
.todo-container {
  display: flex;
  justify-content: center;
}
.todo-list {
  padding: 0;
  width: 200px;
  justify-content: flex-start;
}
.todo {
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: white;
  border-radius: 5px;
  padding: 10px 6px;
  margin-bottom: 20px;
  text-align: left;
  /* display: inline-block; */
}
.fa-trash {
  cursor: pointer;
}
.check {
  cursor: pointer;
}
.completed {
  opacity: 0.3;
}
</style>
