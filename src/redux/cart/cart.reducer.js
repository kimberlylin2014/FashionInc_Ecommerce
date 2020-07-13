import {cartActionTypes} from './cart.types'
import {addItemToCart, deleteItemFromCart, removeEntireItemFromCart} from './cart.util';

const INITIAL_STATE = {
    items: [],
    display: false,
    isLoading: false,
    errorMessage: undefined
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_DISPLAY: 
            return {
                ...state,
                display: !state.display
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state, action.payload)
            }
        case cartActionTypes.DELETE_ITEM:
            return {
                ...state,
                items: deleteItemFromCart(state, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                items: removeEntireItemFromCart(state, action.payload)
            }
        case cartActionTypes.EMPTY_CART:
            return {
                ...state,
                items: []
            }
        case cartActionTypes.SAVE_CART_START:
            return {
                ...state,
                isLoading: true
            }
        case cartActionTypes.SAVE_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case cartActionTypes.SAVE_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        case cartActionTypes.ADD_CART_COLLECTION:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;