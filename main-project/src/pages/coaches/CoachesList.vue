<template>
    <section>
        filter
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline">refresh</BaseButton>
                <BaseButton link
                    to="/register">register as coach</BaseButton>
            </div>
            <ul v-if="hasCoaches">
                <CoachItem v-for="coach in filteredCoaches"
                    :key="coach.id"
                    :id="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas">{{ coach.firstName }}</CoachItem>
            </ul>
            <h3 v-else>no coaches found</h3>
        </BaseCard>
    </section>
</template>

<script>
import CoachItem from '@/components/coaches/coachItem.vue';

export default {
    components: {
        CoachItem
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>