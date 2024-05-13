const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'a') {
                this.boxASelected = true;
            }
            else if (box === 'b') {
                this.boxBSelected = true;
            }
            else if (box === 'c') {
                this.boxCSelected = true;
            }
        }
    }
});

app.mount('#styling');