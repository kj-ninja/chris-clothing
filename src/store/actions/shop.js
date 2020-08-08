import * as actionTypes from './actionTypes';

export const fetchCollectionsStart = () => ({type: actionTypes.FETCH_COLLECTIONS_START});
export const fetchCollectionsSuccess = (collections) => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFail = (error) => ({
    type: actionTypes.FETCH_COLLECTIONS_FAIL,
    payload: error
});