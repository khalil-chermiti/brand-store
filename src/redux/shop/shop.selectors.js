import { createSelector } from "reselect";  

const selectShop = state => state.shop ;

// ! select shop collections / sections
export const selectShopCollections = createSelector(
    selectShop , 
    (shop) => shop.collections
)

// ! select shop collections as arrays 

export const selectShopCollectionsToArrays = createSelector(
    selectShop , 
    (shop) => (shop.collections ? Object.values(shop.collections) : null)
)
