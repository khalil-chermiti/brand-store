import { call, put , takeLatest } from "redux-saga/effects";

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
    fetchCollectionsError,
    fetchCollectionsSuccess,
} from "./shop.actions";

import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
    try {
        
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(err) {
        yield put(fetchCollectionsError(err.message)) ;
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
