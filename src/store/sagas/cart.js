import {all, put, call, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {clearCart} from "../actions/cart";

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}