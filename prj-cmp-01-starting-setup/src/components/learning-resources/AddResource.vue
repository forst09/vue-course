<template>
    <BaseDialog v-if="inputIsInvalid"
        title="Invalid Input"
        @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
        </template>
        <template #actions>
            <BaseButton @click="confirmError">Okay</BaseButton>
        </template>
    </BaseDialog>
    <BaseCard>
        <form action=""
            @submit.prevent="addResource()">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text"
                    name="title"
                    id="title"
                    ref="inputTitle">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description"
                    id="description"
                    rows="3"
                    ref="inputDescription"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url"
                    name="link"
                    id="link"
                    ref="inputLink">
            </div>
            <div>
                <BaseButton type="submit">Add resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script>
export default {
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        addResource() {
            const enteredTitle = this.$refs.inputTitle.value,
                enteredDescription = this.$refs.inputDescription.value,
                enteredLink = this.$refs.inputLink.value;

            if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }

            this.submitForm(enteredTitle, enteredDescription, enteredLink)
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    },
    inject: ['submitForm'],
}
</script>

<!-- <template>
    <BaseCard>
        <form action=""
            @submit.prevent="addResource()">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text"
                    name="title"
                    id="title"
                    v-model="inputTitle">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description"
                    id="description"
                    rows="3"
                    v-model="inputDescription"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url"
                    name="link"
                    id="link"
                    v-model="inputLink">
            </div>
            <div>
                <BaseButton type="submit">Add resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script>
export default {
    data() {
        return {
            inputLink: this.inputLink,
            inputDescription: this.inputDescription,
            inputTitle: this.inputTitle
        }
    },
    methods: {
        addResource() {
            this.resources.push({
                id: this.inputTitle,
                title: this.inputTitle,
                description: this.inputDescription,
                link: this.inputLink
            })
        }
    },
    inject: ['resources'],
}
</script> -->

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>