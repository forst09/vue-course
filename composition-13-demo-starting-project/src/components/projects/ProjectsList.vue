<template>
  <base-container v-if="props.user">
    <h2>{{ props.user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableItems"
        :key="prj.id"
        :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
  import { computed, defineComponent, toRefs, watch } from 'vue';
  import ProjectItem from './ProjectItem.vue';
  import useSearch from '../../hooks/search';

  defineComponent([
    ProjectItem
  ]);

  const props = defineProps([
    'user',
  ]);

  const { user } = toRefs(props);

  const projects = computed(() => {
    return user.value ? user.value.projects : []
  });

  // let enteredSearchTerm = ref('');
  // let activeSearchTerm = ref('');

  // const availableProjects = computed(() => {
  //   if (activeSearchTerm.value) {
  //     return props.user.projects.filter((prj) =>
  //       prj.title.includes(activeSearchTerm.value)
  //     );
  //   }
  //   return props.user.projects;
  // });
  const { enteredSearchTerm, availableItems, updateSearch } = useSearch(projects, 'title');

  const hasProjects = computed(() => {
    return user.value.projects && availableItems.value.length > 0;
  })

  // watch(enteredSearchTerm, (val) => {
  //   setTimeout(() => {
  //     if (val === enteredSearchTerm.value) {
  //       activeSearchTerm.value = val;
  //     }
  //   }, 300);
  // });

  // function updateSearch(val) {
  //   enteredSearchTerm.value = val;
  // }

  const propsWithRefs = toRefs(props);
  // const user = propsWithRefs.user;

  watch(user, () => {
    updateSearch('');
  })

  // export default {
  // components: {
  //   ProjectItem,
  //   },
  // props: ['user'],
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = '';
  //   },
  // },
  // };
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>