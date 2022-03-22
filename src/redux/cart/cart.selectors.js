import { createSelector } from "reselect";  


// ! input selector ,selecting the cart
const selectCart = state => state.cart ;

// ! selecting the cartItems 
export const selectCartItems = createSelector(
    selectCart,
    (cart) => cart.items
)

// ! selecting the items count
export const selectCartCount = createSelector(
    [selectCartItems] ,
    (items) => items.reduce((acc , item) => {return acc + item.quantity }, 0)
)

// ! selecting the cart.hidden property 
export const selectIsCartHidden = createSelector(
    selectCart , 
    (cart) => cart.hidden 
)

// ! select the total cost 

export const selectCartTotatl = createSelector(
    [selectCartItems] ,
    (items) => items.reduce((acc , item) => {return acc + item.price * item.quantity }, 0)
)