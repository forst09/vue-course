<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">change age</button>
    <div>
      <input type="text"
        placeholder="first name"
        v-model="user.firstName">
      <input type="text"
        placeholder="last name"
        v-model="user.lastName">
    </div>
  </section>
</template>

<script>
import { reactive, computed, watch } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'Daria',
      age: 22,
      firstName: '',
      lastName: ''
    });

    const uName = computed(() => {
      return user.firstName + ' ' + user.lastName;
    })

    watch([user, uName], (newValues, oldValues) => {
      console.log(oldValues[0].age);
      console.log(newValues[0].age);
      console.log(oldValues[1]);
      console.log(newValues[1]);
    });

    function setNewAge() {
      user.age = 32;
    }

    return { user: user, setAge: setNewAge, uName };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>