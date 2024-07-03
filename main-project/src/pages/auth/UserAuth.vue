<template>
    <div>
        <BaseDialog :show="!!error"
            @close="handleError"
            title="an error occured">
            <p>{{ error }}</p>
        </BaseDialog>
        <BaseDialog :show="isLoading"
            fixed
            title="authenticating">
            <BaseSpinner></BaseSpinner>
        </BaseDialog>
        <BaseCard>
            <form @submit.prevent="submitForm"
                action="">
                <div class="form-control">
                    <label for="email">e-mail</label>
                    <input type="email"
                        id="email"
                        v-model.trim="email">
                </div>
                <div class="form-control">
                    <label for="password">password</label>
                    <input type="password"
                        id="password"
                        v-model.trim="password">
                </div>
                <p v-if="!formIsValid">enter a valid email and password</p>
                <BaseButton>{{ submitBtnCaption }}</BaseButton>
                <BaseButton type="button"
                    mode="flat"
                    @click="switchAuthMode">{{ switchModeBtnCaption }}</BaseButton>
            </form>
        </BaseCard>
    </div>
</template>

<script>
import { handleError } from 'vue';

export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            const actionPayload = {
                email: this.email,
                password: this.password,
            }

            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', actionPayload);
                }
                else {
                    await this.$store.dispatch('signup', actionPayload);
                }
                const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectUrl);
            }
            catch (error) {
                this.error = error.message || 'failed to authenticate';
            }

            this.isLoading = false;
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
            }
            else {
                this.mode = 'login';
            }
        },
        handleError() {
            this.error = null;
        }
    },
    computed: {
        submitBtnCaption() {
            if (this.mode === 'login') {
                return 'login';
            }
            else {
                return 'signup';
            }
        },
        switchModeBtnCaption() {
            if (this.mode === 'signup') {
                return 'login';
            }
            else {
                return 'signup';
            }
        }
    }
}
</script>

<style scoped>
form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
    resize: none;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>