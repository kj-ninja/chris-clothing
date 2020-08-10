import * as actionTypes from './actionTypes';

export const googleSignInStart = () => ({
    type: actionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (email, password) => ({
    type: actionTypes.EMAIL_SIGN_IN_START,
    email: email,
    password: password
});

export const signInSuccess = (user) => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFail = (error) => ({
    type: actionTypes.SIGN_IN_FAIL,
    payload: error
});

export const checkUserSession = () => ({
    type: actionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: actionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: actionTypes.SIGN_OUT_SUCCESS
})

export const signOutFail = (error) => ({
    type: actionTypes.SIGN_OUT_FAIL,
    payload: error
})

export const signUpStart = (user) => ({
    type: actionTypes.SIGN_UP_START,
    payload: user
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFail = (error) => ({
    type: actionTypes.SIGN_UP_FAIL,
    payload: error
})