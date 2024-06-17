export default {
    finalCounter(state, getters) {
        return state.counter;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
            return 0;
        }
        else if (finalCounter > 100) {
            return 100;
        }
        return finalCounter;
    },
    testAuth(state, getters, rootState, rootGetters) {
        // return state.isLoggedIn;
        return rootState.isLoggedIn;
    }
}