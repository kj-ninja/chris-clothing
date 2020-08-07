import * as actionTypes from './actionTypes';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase";

export const fetchCollectionsStart = () => ({type: actionTypes.FETCH_COLLECTIONS_START});
export const fetchCollectionsSuccess = (collections) => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFail = (error) => ({
    type: actionTypes.FETCH_COLLECTIONS_FAIL,
    payload: error
});

export const fetchCollections = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
        })
            .catch(error => dispatch(fetchCollectionsFail(error)));
    }
};