import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentUser: null,
    error: null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case actionTypes.SIGN_IN_FAIL:
        case actionTypes.SIGN_OUT_FAIL:
        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        default:
            return state;
    }
};

export default user;