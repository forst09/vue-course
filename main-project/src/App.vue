<template>
    <TheHeader></TheHeader>
    <RouterView v-slot="slotProps">
        <Transition name="route"
            mode="out-in">
            <component :is="slotProps.Component"></component>
        </Transition>
    </RouterView>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader
    },
    created() {
        this.$store.dispatch('tryLogin');
    },
    watch: {
        didAutoLogout(curValue, oldValue) {
            if (curValue && curValue !== oldValue) {
                this.$router.replace('/coaches');
            }
        }
    },
    computed: {
        didAutoLogout() {
            return this.$store.getters.didAutoLogout;
        }
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}

.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.route-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.route-enter-active {
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.route-leave-active {
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
