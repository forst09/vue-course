const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  _methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.log(this.message = this.$refs.userText);
    },
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
              <p>{{ hehe }}</p>
            `,
  data() {
    return {
      hehe: 'not hehe'
    }
  }
});

app2.mount('#app2')

const data = {
  message: 'hehe',
  longMessage: 'hihihi'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' oh oh oh';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'not hehe';

console.log(proxy.longMessage);
