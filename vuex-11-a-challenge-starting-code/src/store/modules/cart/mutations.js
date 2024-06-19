export default {
    addProductToCart(state, payload) {
        console.log(payload);
        const productInCartIndex = state.cart.items.findIndex(
            (ci) => ci.productId === payload.itemInfo.id
        );

        if (productInCartIndex >= 0) {
            state.cart.items[productInCartIndex].qty++;
        } else {
            const newItem = {
                productId: payload.itemInfo.id,
                title: payload.itemInfo.title,
                image: payload.itemInfo.image,
                price: payload.itemInfo.price,
                qty: 1,
            };
            state.cart.items.push(newItem);
        }
        state.cart.qty++;
        state.cart.total += payload.itemInfo.price;
    },
    removeProductFromCart(state, payload) {
        const productInCartIndex = state.cart.items.findIndex(
            (cartItem) => cartItem.productId === payload.prodId
        );
        const prodData = state.cart.items[productInCartIndex];
        state.cart.items.splice(productInCartIndex, 1);
        state.cart.qty -= prodData.qty;
        state.cart.total -= prodData.price * prodData.qty;
    },
}