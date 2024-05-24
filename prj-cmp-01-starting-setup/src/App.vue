<template>
  <ul>
    <LearningResource v-for="resource in storedResource"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link" />
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  data() {
    return {
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  components: { LearningResource }
}
</script>

<style scoped></style>
