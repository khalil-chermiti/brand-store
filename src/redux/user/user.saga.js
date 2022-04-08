import { takeLatest, put, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";

import {
    auth,
    googleProvider,
    getCurrentUser,
    createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* getUserSnapShot(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (err) {
        yield put(signInFailure(err.message));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapShot(user) ; 
    } catch (err) {
        yield put(signInFailure(err.message));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapShot(user) ;
    } catch (err) {
        yield put(signInFailure(err.message));
    }
}

// TODO : FIX THIS FUNCTION 
// WATCH THE PREVIOUS VIDEO ABOUT REFACTORING 
// GET_USER_SNAPSHOT FUNCTION 
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return ; 
        yield getUserSnapShot(userAuth) ;
    } catch (err) {
        put(signInFailure(err.message));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
    ]);
}
