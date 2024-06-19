import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/vue-course/vuex-11-a-challenge-starting-code/dist/', redirect: '/products' },
    { path: '/vue-course/vuex-11-a-challenge-starting-code/dist/products', component: ProductsList },
    { path: '/vue-course/vuex-11-a-challenge-starting-code/dist/cart', component: UserCart },
    { path: '/vue-course/vuex-11-a-challenge-starting-code/dist/admin', component: ShopAdmin },
  ]
});

export default router;