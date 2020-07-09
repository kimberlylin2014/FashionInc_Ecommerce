export const addItemToCart = (currState, newItem) => {
    let currentCartList = currState.items;
    let foundItem = currentCartList.find(item => item.id === newItem.id);
    if(foundItem) {
        return currentCartList.map(item => {
            if(item.id === foundItem.id) {
                return {
                    ...foundItem,
                    quantity: foundItem.quantity + 1
                }
            }
            return item;
        })
    }
    return [...currState.items, {...newItem, quantity: 1}]
}

export const deleteItemFromCart = (currState, itemToDelete) => {
    let findItem = currState.items.find(item => item.id === itemToDelete.id);
    if(findItem.quantity === 1) {
        return currState.items.filter(item => item.id !== findItem.id)
    }
    return currState.items.map(item => {
        if(item.id === itemToDelete.id) {
            return {
                ...itemToDelete,
                quantity: itemToDelete.quantity - 1
            }
        }
        return item;
    })
}

export const removeEntireItemFromCart =(currState, itemToDelete) => {
    return currState.items.filter(item => item.id !== itemToDelete.id)
}