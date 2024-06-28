<template>
    <section>
        <BaseCard>
            <h2>register as a coach now!</h2>
            <CoachForm @save-data="saveData"></CoachForm>
        </BaseCard>
    </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
}
</script>
