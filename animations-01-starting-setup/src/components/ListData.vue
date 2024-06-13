<template>
    <!-- <ul> -->
    <TransitionGroup tag="ul"
        name="user-list">
        <li v-for="user in users"
            :key="user"
            @click="removeUser(user)">{{ user }}</li>
    </TransitionGroup>
    <!-- </ul> -->
    <div class="">
        <input type="text"
            ref="userNameInput">
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['hehe', 'not hehe', 'hihi', 'not hihi'],
        }
    },
    methods: {
        addUser() {
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(name) {
            this.users = this.users.filter(user => user != name)
        }
    }
}
</script>

<style>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}
li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-active {
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
    position: absolute;
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move {
    transition: transform 0.8s ease;
}
</style>