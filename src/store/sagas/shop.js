import {takeLatest, call, put, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase";
import {fetchCollectionsFail, fetchCollectionsSuccess} from "../actions/shop";

export function* fetchCollections() {
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error) {
        yield put(fetchCollectionsFail(error));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(actionTypes.FETCH_COLLECTIONS_START, fetchCollections)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}

