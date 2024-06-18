export default {
    cartTotal(state) {
        return state.cart.total;
    },
    cartItems(state) {
        return state.cart.items;
    },
    cartQty(state) {
        return state.cart.qty;
    }
}