const app = Vue.createApp({
    data() {
        return {
            value: '',
            enterValue: ''
        }
    },
    methods: {
        btnClicked() {
            alert('hehe');
        },
        inputValue(e) {
            this.value = e.target.value;
        },
        inputEnterValue(e) {
            this.enterValue = e.target.value;
        }
    }
});

app.mount('#assignment');