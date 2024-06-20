import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';

const router = createRouter({
  history: createWebHistory('/vue-course/vuex-11-a-challenge-starting-code/dist/'),
  routes: [
    { path: '/', redirect: '/products', name: 'main' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin, name: 'admin' },
  ]
});

export default router;