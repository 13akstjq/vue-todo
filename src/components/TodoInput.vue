<template>
  <div>
    <div class="input-container shadow">
      <input type="text" v-model="inputValue" v-on:keyup.enter="addInput" />
      <span class="add-container" v-on:click="addInput">
        <i class="fas fa-plus"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "gg"
    };
  },
  methods: {
    addInput() {
      if (this.inputValue != "") {
        this.$store.commit("addTodo", this.inputValue);
        // this.$emit("addTodo", this.inputValue);
        this.clearInput();
      }
    },
    clearInput: function() {
      this.inputValue = "";
    }
  }
};
</script>

<style >
.input-container {
  background-color: white;
  display: inline-block;
  padding-left: 6px;
  border-radius: 10px;
  margin-top: 20px;
}
.add-container {
  float: right;
  cursor: pointer;
  /* border: 1px solid rgb(0, 0, 0, 0.3); */
  background: linear-gradient(to right, #6478fb, #8763fb);
  padding: 10px 6px;
  border-radius: 0px 10px 10px 0;
}
input {
  border: none;
  padding: 10px 0;
}

input:focus {
  outline: none;
}
</style>
