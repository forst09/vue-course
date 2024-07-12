<template>
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const age = inject('age');

console.log(age);

const props = defineProps([
    'firstName',
    'lastName',
]);

const emits = defineEmits([
    'save-data'
])

const uName = computed(() => {
    return props.firstName + ' ' + props.lastName;
})

onBeforeMount(() => {
    console.log('before mount')
})

onMounted(() => {
    console.log('onMounted')
})

onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})

onUpdated(() => {
    console.log('onUpdated')
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
})

onUnmounted(() => {
    console.log('onUnmounted')
})


</script>