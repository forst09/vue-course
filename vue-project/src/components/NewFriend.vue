<template>
    <form action=""
        @submit.prevent="submitData">
        <div>
            <label for="">Name</label>
            <input type="text"
                v-model="enteredName">
        </div>
        <div>
            <label for="">Phone</label>
            <input type="tel"
                v-model="enteredPhone">
        </div>
        <div>
            <label for="">Email</label>
            <input type="email"
                v-model="enterebEmail">
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enterebEmail: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-contact',
                this.enteredName,
                this.enteredPhone,
                this.enterebEmail);
        }
    }
}
</script>