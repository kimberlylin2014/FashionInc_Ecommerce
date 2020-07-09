import { cartActionTypes } from './cart.types';

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
