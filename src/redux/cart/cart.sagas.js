import { takeLatest, call, put, all} from 'redux-saga/effects'
import {cartActionTypes} from "./cart.types"
import { firestore } from '../../firebase/firebase.util';
import  { saveCollectionSuccess, saveCollectionFailure, addCartCollection} from './cart.actions'

import userActionTypes from '../user/user.types'

export function* saveCart(userID, cartItems) {
    try {
        const userRef = yield firestore.doc(`users/${userID}`);
        yield userRef.update({ cart : cartItems});
        yield put(saveCollectionSuccess())
    } catch (error) {
        yield put(saveCollectionFailure())
    }
}

export function* addCollection({payload: {cart}}) {
    try {
        yield put(addCartCollection(cart))
    } catch (error) {
        yield console.log(error)
    }
}

export function* onSignInSuccess() {
    yield takeLatest(userActionTypes.SIGN_IN_COMPLETE, addCollection)
}

export function* cartSagas() {
    yield all([call(onSignInSuccess)])
}