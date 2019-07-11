<template>
  <div>
    <span class="clearBtn shadow" v-on:click="removeAllTodo">Clear</span>
  </div>
</template>

<script>
export default {
  methods: {
    removeAllTodo() {
      this.$emit("removeAllTodo");
    }
  }
};
</script>

<style>
.clearBtn {
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.clearBtn:hover {
  opacity: 0.6;
}
</style>
