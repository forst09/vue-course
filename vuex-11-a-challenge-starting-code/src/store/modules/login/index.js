import loginActions from './actions';
import loginMutations from './mutations';
import loginGetters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: loginMutations,
    actions: loginActions,
    getters: loginGetters
}