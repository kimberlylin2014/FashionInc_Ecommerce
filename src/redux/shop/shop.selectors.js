import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections =  createSelector(
    [selectShop],
    (shop) => {
        return shop.collections;
    }
)

// select a specific collection category : hats, shoes, etc
export const selectCollectionSection = (sectionParam) => {
    return createSelector(
        [selectShopCollections],
        (collections) => {
            return collections ?  collections[sectionParam] : null;
        }
    )
}

// select the array of categories along with items
export const selectCollectionPreview = createSelector(
    [selectShopCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)