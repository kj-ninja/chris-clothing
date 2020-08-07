import * as actionTypes from '../actions/actionTypes';

const initialState = {
    collections: [],
    loading: false,
    error: null
}

const shop = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                loading: false
            }
        case actionTypes.FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default shop;