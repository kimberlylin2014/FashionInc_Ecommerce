import { cartActionTypes } from './cart.types';
import {firestore} from '../../firebase/firebase.util'
import { auth } from '../../firebase/firebase.util';

export const addItem = (item) => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const toggleDisplay = () => {
    return {
        type: cartActionTypes.TOGGLE_DISPLAY
    }
}

export const deleteItem = (item) => {
    return {
        type: cartActionTypes.DELETE_ITEM,
        payload: item
    }
}

export const removeEntireItemFromCart = (item) => {
    return {
        type: cartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}

export const emptyCart = () => {
    return {
        type: cartActionTypes.EMPTY_CART
    }
}

// 

export const addCartCollection = (cartCollection) => {
    return {
        type: cartActionTypes.ADD_CART_COLLECTION,
        payload: cartCollection
    }
}

export const saveCollectionStart = () => {
    return {
        type: cartActionTypes.SAVE_CART_START
    }
}

export const saveCollectionSuccess = () => {
    return {
        type: cartActionTypes.SAVE_CART_SUCCESS,
    }   
}

export const saveCollectionFailure = (errorMessage) => {
    return {
        type: cartActionTypes.SAVE_CART_FAILURE,
        payload: errorMessage
    }
}

export const saveCartCollectionAsync = (userID, cartItems) => {
    return dispatch => {
        console.log('test')
        dispatch(saveCollectionStart());
        const userRef = firestore.doc(`users/${userID}`)
        userRef.update({ cart : cartItems})
            .then(()=> {
                dispatch(saveCollectionSuccess())
                auth.signOut();
            })
            .catch(error => dispatch(saveCollectionFailure(error.message)))
    }
}

