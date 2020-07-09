import {cartActionTypes} from './cart.types'
import {addItemToCart, deleteItemFromCart} from './cart.util';
const INITIAL_STATE = {
    items: [],
    display: false
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
        default:
            return state;
    }
}

export default cartReducer;