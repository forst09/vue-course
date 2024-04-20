const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(e) {
      this.name = e.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm(e) {
      alert('submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
