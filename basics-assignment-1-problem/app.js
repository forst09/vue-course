const vueApp = Vue.createApp({
    data() {
        return {
            name: 'Daria',
            age: 22,
            imageUrl: 'https://i.pinimg.com/736x/74/f4/f5/74f4f548392fbdafbe8a5d9764c83eaf.jpg',
        }
    },
    methods: {
        random() {
            const randomNum = Math.random();
            return randomNum;
        },
    }
});

vueApp.mount('#assignment');