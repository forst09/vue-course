import { createStore } from "vuex";
import rootGetters from './getters';

import cartModule from './modules/cart/index';
import loginModule from './modules/login/index';

const store = createStore({
    modules: {
        cart: cartModule,
        login: loginModule
    },
    state() {
        return {
            products: [
                {
                    id: 'p1',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    title: 'Book Collection',
                    description:
                        'A collection of must-read books. All-time classics included!',
                    price: 99.99,
                },
                {
                    id: 'p2',
                    image:
                        'https://m.media-amazon.com/images/I/619kbj04wKL.jpg',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 129.99,
                },
                {
                    id: 'p3',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Food Box',
                    description:
                        'May be partially expired when it arrives but at least it is cheap!',
                    price: 6.99,
                },
            ],
        }
    },
    getters: rootGetters,
});

export default store;