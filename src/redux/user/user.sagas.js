import { takeLatest, put, call, all } from 'redux-saga/effects';
import userActionTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.util'
import { signInSuccess, 
        signInFailure, 
        signOutSuccess, 
        signOutFailure, 
        signUpFailure, 
        signUpSuccess, 
        updateUserInfoSuccess,
        updateUserInfoFailure,
        signInComplete
    } from './user.actions'
import {saveCart} from '../cart/cart.sagas'
import { firestore } from '../../firebase/firebase.util';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        const user = {id: userSnapshot.id, ...userSnapshot.data()}
        yield put(signInSuccess(user))
        return user;
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

// UPDATE USER
export function* updateUserInfo({payload: {currentUser, displayName}}) {
    try {
        const userRef = yield firestore.doc(`users/${currentUser.id}`)
        yield userRef.update({
            ...currentUser,
            displayName: displayName
        });
        const userSnapShot = yield userRef.get();
        yield put(updateUserInfoSuccess({...userSnapShot.data()})) 
    } catch (error) {
        yield put(updateUserInfoFailure(error.message))
    }
}

export function* onUpdateUserInfoStart() {
    yield takeLatest(userActionTypes.UPDATE_USER_INFO_START, updateUserInfo)
}
// Google Sign In
export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userObj = yield getSnapshotFromUserAuth(user);
        yield put(signInComplete(userObj))
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// Email SignIn
export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userObj = yield getSnapshotFromUserAuth(user);
        yield console.log(userObj)
        yield put(signInComplete(userObj))
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

// User Authentication
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}
export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

// Sign Out
export function* signOut({payload: {userID, cartItems}}) {
    try {
        yield saveCart(userID, cartItems)
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error.message))
    }
}
export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

// User Sign Up
export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch(error) {
        yield put(signUpFailure(error.message))
    }
}
export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    const userObj = yield getSnapshotFromUserAuth(user, additionalData)
    yield put(signInComplete(userObj))
}
export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

// All User Sagas
export function* userSagas() {
    yield all([call(onGoogleSignInStart), 
          call(onEmailSignInStart), 
          call(onCheckUserSession), 
          call(onSignOutStart), 
          call(onSignUpStart), 
          call(onSignUpSuccess),
          call(onUpdateUserInfoStart) ])
}