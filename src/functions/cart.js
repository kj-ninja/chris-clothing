export const addItem = (cartItems, cartItemToAdd) => {
    const isItemExists = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id
    })

    if (isItemExists) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};