<template>
    <div>
        <BaseDialog :show="!!error"
            title="an error occurred"
            @close="handleError">
            <p>{{ error }}</p>
        </BaseDialog>
        <section>
            <CoachFilter @change-filter="setFilters"></CoachFilter>
        </section>
        <section>
            <BaseCard>
                <div class="controls">
                    <BaseButton mode="outline"
                        @click="loadCoaches(true)">refresh</BaseButton>
                    <BaseButton link
                        to="/auth?redirect=register"
                        v-if="!isLoggedIn">login to register as coach</BaseButton>
                    <BaseButton v-if="!isCoach && !isLoading && isLoggedIn"
                        link
                        to="/register">register as coach</BaseButton>
                </div>
                <div v-if="isLoading">
                    <BaseSpinner></BaseSpinner>
                </div>
                <ul v-else-if="hasCoaches">
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
    </div>
</template>

<script>
import CoachItem from '@/components/coaches/coachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import { handleError } from 'vue';

export default {
    components: {
        CoachItem,
        CoachFilter
    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        },
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            })
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach']
        }
    },
    created() {
        this.loadCoaches();
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(refresh = false) {
            this.isLoading = true;
            try {
                await this.$store.dispatch('coaches/loadCoaches', { forceRefresh: refresh });
            }
            catch (error) {
                this.error = error.message || 'somethind went wrong';
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
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