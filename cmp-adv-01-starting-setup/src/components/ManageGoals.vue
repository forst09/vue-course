<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <Teleport to="body">
            <ErrorAlert v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>enter a few characters...</p>
                <button @click="confirmError">Okay</button>
            </ErrorAlert>
        </Teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

    export default {
        data() {
            return {
                inputIsInvalid: false,
            }
        },
        methods: {
            setGoal() {
                const enteredValue = this.$refs.goal.value;
                if (enteredValue === '') {
                    this.inputIsInvalid = true;
                }
            },
            confirmError() {
                this.inputIsInvalid = false;
            }
        },
        components: {
            ErrorAlert,
        }
    }
</script>