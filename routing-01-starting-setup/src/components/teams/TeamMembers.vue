<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"></user-item>
    </ul>
    <RouterLink to="/teams/t2">Go to team 2</RouterLink>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMember(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      };
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMember(this.teamId);
    console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('teamMembers component beforeRouteUpdate')
    console.log(to, from);
    this.loadTeamMember(to.params.teamId);
    next();
  },
  watch: {
    teamId(newId) {
      this.loadTeamMember(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>