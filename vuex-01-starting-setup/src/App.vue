<template>
  <base-container title="Vuex"
    v-if="isAuth">
    <TheCounter></TheCounter>
    <FavoriteValue></FavoriteValue>
    <button @click="addOne">Add 10</button>
    <ChangeCounter></ChangeCounter>
  </base-container>
  <base-container title="Auth">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        // type: 'increase',
        type: 'numbers/increase',
        value: 10
      })
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuth
    }
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
</style>