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

export const removeItem = (cartItems, cartItemToRemove) => {
    const isItemExists = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id
    })

    if (isItemExists.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    ))
};