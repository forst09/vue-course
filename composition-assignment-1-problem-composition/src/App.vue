<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <!-- => Separate refs -->
  <!-- <h3 v-if="goalVisibility">{{ courseGoal }}</h3> -->

  <!-- => Ref Object -->
  <h3 v-if="object.goalVisibility">{{ object.courseGoal }}</h3>

  <!-- => Reactive Object -->
  <!-- <h3 v-if="object.goalVisibility">{{ object.courseGoal }}</h3> -->

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->

  <button @click="changeGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref } from 'vue';
// import { reactive } from 'vue';

//  => Separate refs 
// const courseGoal = ref('become a vue master');
// let goalVisibility = ref(true);

//  => Ref Object
const object = ref({
  courseGoal: 'become a vue master',
  goalVisibility: true
});

// => Reactive Object
// const object = reactive({
//   courseGoal: 'become a vue master',
//   goalVisibility: true
// });

function changeGoalVisibility() {
  //  => Separate refs 
  // goalVisibility.value = !goalVisibility.value;

  // => Reactive Object
  object.value.goalVisibility = !object.value.goalVisibility;

  // => Reactive Object
  // object.goalVisibility = !object.goalVisibility;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>