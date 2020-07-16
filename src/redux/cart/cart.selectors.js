import {createSelector} from 'reselect'

const selectCart = (state) => {
    return state.cart
}

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
)

export const getCartVisibility = createSelector(
    [selectCart],
    (cart) => cart.display
)

export const getTotalCartQuantity = createSelector(
    [selectCartItems],
    (items) => {
        return items.reduce((accumulator, item) => accumulator + item.quantity, 0)
    }
)

export const getTotalCartCost = createSelector(
    [selectCartItems],
    (items) => {
        return items.reduce((accumulator, item) => accumulator + (item.quantity * item.price), 0)
    }
)

export const selectIsCartLoading = createSelector(
    [selectCart],
    (cart) => cart.isLoading
)

export const selectIsCartLoaded = createSelector(
    [selectCart],
    (cart) => !!cart.items
)