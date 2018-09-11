<template>
  <div>
    <input type="text" @keyup.enter="onInput" placeholder="search">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event) {
      this.$emit('termChange', event.target.value);
      event.target.value = '';
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
    padding-left: 5px;
  }
</style>

