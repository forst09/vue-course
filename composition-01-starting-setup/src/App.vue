<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>

  </section>
</template>

<script>
import { reactive } from 'vue';
// import { ref } from 'vue';

export default {
  setup() {
    // const uName = ref('Daria');
    // const uAge = ref(22);

    const user = reactive({
      name: 'Daria',
      age: 22
    });

    // const user = ref({
    //   name: 'Daria',
    //   age: 22
    // });

    setTimeout(() => {
      // uName.value = 'hehe';
      // uAge.value = 666;
      // user.value.name = 'hehe';
      // user.value.age = 666;
      user.name = 'hehe';
      user.age = 666;
    }, 2000);

    return { user: user };
    // return { userName: user.value.name, age: user.value.age, user: user };
    // return { userName: uName, age: uAge };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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