import {takeLatest, call, put, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase";
import {fetchCollectionsFail, fetchCollectionsSuccess, initialItems} from "../actions/shop";

const filteredItems = (arr) => {
    const result = [];

    arr.forEach(arrItem => {
        arrItem.items.forEach(item => {
            result.push(item);
        });
    });

    return result;
};

export function* fetchCollections() {
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        const arrOfItems = Object.keys(collectionsMap).map(key=>collectionsMap[key]);

        yield put(initialItems(filteredItems(arrOfItems)));
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

