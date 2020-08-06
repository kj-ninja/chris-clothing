import * as actionTypes from '../actions/actionTypes';

const initialState = {
    collections: []
}

const shop = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
};

export default shop;