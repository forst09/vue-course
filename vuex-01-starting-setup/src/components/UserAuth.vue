<template>
    <button @click="login"
        v-if="!isAuth">Login</button>
    <button @click="logout"
        v-else>Logout</button>
    <p>{{ isTestAuth }}</p>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('login');
        },
        logout() {
            this.$store.dispatch('logout');
        },
    },
    computed: {
        isAuth() {
            return this.$store.getters.userIsAuth
        },
        isTestAuth() {
            return this.$store.getters.testAuth;
        }
    }
}
</script>