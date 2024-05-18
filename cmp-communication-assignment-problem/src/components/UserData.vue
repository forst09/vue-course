<template>
    <div class="inputs">
        <div>
            <label for="name">Your name</label>
            <input type="text"
                id="name"
                v-model="name"
                @input="updateUserInfo">
        </div>
        <div>
            <label for="age">Your age</label>
            <input type="text"
                id="age"
                v-model="age"
                @input="updateUserInfo">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: ''
        }
    },
    emits: ['update-info'],
    methods: {
        updateUserInfo() {
            this.$emit('update-info', this.name, this.age);
        }
    }
}
</script>