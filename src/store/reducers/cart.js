import * as actionTypes from '../actions/actionTypes';
import {addItem} from '../../functions/cart';

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
        case actionTypes.ADD_ITEM_TO_CART:

            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cart;