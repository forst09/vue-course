<template>
  <form>
    <input type="search"
      @input="search"
      :value="props.searchTerm"
      placeholder="Filter items" />
  </form>
</template>

<script setup>
const props = defineProps([
  'searchTerm'
]);

const emits = defineEmits([
  'search'
])

function search(event) {
  emits('search', event.target.value);
}

// export default {
//   props: ['searchTerm'],
//   emits: ['search'],
//   methods: {
//     search(event) {
//       this.$emit('search', event.target.value);
//     },
//   },
// };
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>