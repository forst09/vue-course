const app = Vue.createApp({
    data() {
        return {
            // value: 0,
            result: 0,
            output: ''
        }
    },
    methods: {
        add5() {
            this.result = this.result + 5;
        },
        add1() {
            this.result = this.result + 1;
        }
    },
    watch: {
        result(value) {
            if (value < 37) {
                this.output = 'Not there yet ' + value;
            }
            else if (value > 37) {
                this.output = 'Too much! ' + value;
            }
            else {
                this.output = value;
            };
            setTimeout(() => {
                value = 0;
                this.output = value;
            }, 5000)
        }
    }
});

app.mount('#assignment');