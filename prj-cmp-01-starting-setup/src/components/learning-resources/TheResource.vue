<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('StoredResources')"
            :mode="storedResBtnMode">Strored Resources</BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')"
            :mode="addResBtnMode">Add Resources</BaseButton>
    </BaseCard>
    <KeepAlive>
        <component :is="selectedTab">

        </component>
    </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    data() {
        return {
            selectedTab: 'StoredResources',

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
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        submitForm(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            };
            this.storedResource.unshift(newResource);
            this.selectedTab = 'StoredResources';
        },
        removeResource(id) {
            const resourceIndex = this.storedResource.findIndex(resource => resource.id === id);
            this.storedResource.splice(resourceIndex, 1);
        }
    },
    components: {
        StoredResources,
        AddResource
    },
    provide() {
        return {
            resources: this.storedResource,
            submitForm: this.submitForm,
            removeResource: this.removeResource
        }
    },
    computed: {
        storedResBtnMode() {
            return this.selectedTab === 'StoredResources' ? null : 'flat'
        },
        addResBtnMode() {
            return this.selectedTab === 'AddResource' ? null : 'flat'
        }
    }
}
</script>