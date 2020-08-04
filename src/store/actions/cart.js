import * as actionTypes from './actionTypes';

export const toggleCartHidden = () => ({type: actionTypes.TOGGLE_CART_HIDDEN});
export const addItemToCart = (item) => ({type: actionTypes.ADD_ITEM_TO_CART, payload: item})