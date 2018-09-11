<template>
  <div>
    <input type="text" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event) {
      this.$emit('termChange', event.target.value);
    }
  },
}
</script>

<style scoped>
  div {
    text-align: center;
    margin: 20px;
  }
  input {
    width: 75%;
  }
</style>

