import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections =  createSelector(
    [selectShop],
    (shop) => {
        return shop.collections;
    }
)

export const selectCollectionSection = (sectionParam) => {
    return createSelector(
        [selectShopCollections],
        (collections) => {
            return collections[sectionParam];
        }
    )
}