import * as actionTypes from '../actions/actionTypes';

const initialState = {
    hidden: true
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cart;