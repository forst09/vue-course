export default {
    addProductToCart(state, payload) {
        const productInCartIndex = state.cart.items.findIndex(
            (ci) => ci.productId === payload.id
        );

        if (productInCartIndex >= 0) {
            state.cart.items[productInCartIndex].qty++;
        } else {
            const newItem = {
                productId: payload.id,
                title: payload.title,
                image: payload.image,
                price: payload.price,
                qty: 1,
            };
            state.cart.items.push(newItem);
            console.log(payload.title);
        }
        state.cart.qty++;
        state.cart.total += payload.price;
    },

}