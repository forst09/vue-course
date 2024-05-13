const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            paragraphClass: '',
            paragraphVisible: true,
            paragraphVisibleClass: '',
            inlineBg: ''
        }
    },
    watch: {
        userClass(value) {
            if (value === 'user1' || value === 'user2') {
                this.paragraphClass = value;
            }
            else {
                this.paragraphClass = '';
            }
        }
    },
    methods: {
        toggleVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
            if (this.paragraphVisible) {
                this.paragraphVisibleClass = 'visible';
            }
            else {
                this.paragraphVisibleClass = 'hidden';
            }
        }
    }
})

app.mount('#assignment');