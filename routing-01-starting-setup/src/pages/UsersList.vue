<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save data</button>
  <ul>
    <user-item v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false
    }
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('users list component beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('usersList component beforeLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    }
    else {
      const userWantsToLeave = confirm('are you sure?');
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>