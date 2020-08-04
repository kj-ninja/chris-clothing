import * as actionTypes from '../actions/actionTypes';
import {addItem, removeItem} from '../../functions/cart';

const initialState = {
    hidden: true,
    cartItems: []
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        case actionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default cart;