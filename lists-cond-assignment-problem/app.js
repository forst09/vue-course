const app = Vue.createApp({
    data() {
        return {
            list: [],
            inputTaskValue: '',
            listIsVisible: true,
        }
    },
    methods: {
        addTask() {
            this.list.push(this.inputTaskValue);
        },
        changeListVisibility() {
            this.listIsVisible = !this.listIsVisible;
        }
    },
    computed: {
        btnCaption() {
            if (this.listIsVisible) {
                return 'Hide list';
            }
            else {
                return 'Show list';
            }
        }
    }
});

app.mount('#assignment');