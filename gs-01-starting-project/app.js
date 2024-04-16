Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');


// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal() {
//     const value = input.value;
//     const listElement = document.createElement('li');
//     listElement.textContent = value;
//     list.append(listElement);
//     input.value = '';
// }

// btn.addEventListener('click', addGoal);