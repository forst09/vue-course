<template>
  <section class="container">
    <UserData :first-name="user.firstName"
      :last-name="user.lastName"></UserData>
    <button @click="setAge">change age</button>
    <div>
      <input type="text"
        placeholder="first name"
        v-model="user.firstName">
      <input type="text"
        placeholder="last name"
        ref="lastNameInput">
      <button @click="setLastName">set last name</button>
    </div>
  </section>
</template>

<script>
import { reactive, computed, watch, ref, provide } from 'vue';
import UserData from "./components/UserData.vue";

export default {
  components: {
    UserData
  },
  setup() {

    const lastNameInput = ref('');

    const user = reactive({
      name: 'Daria',
      // age: 22,
      firstName: '',
      lastName: lastNameInput.value
    });

    let age = ref(22);

    provide('age', age);


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
      age.value = 32;
      console.log(age);
    }

    function setLastName() {
      user.lastName = lastNameInput.value.value;

    }

    return { user: user, setAge: setNewAge, uName, lastNameInput, setLastName };
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