export const addItemToCart = (cartItems , cartItemToAdd) => {
    // check if item exists or not 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if we had a match we return a new array with updated quantity for each
    if(existingCartItem) {
        return cartItems.map((cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem , quantity :  ++cartItem.quantity} :
            cartItem 
        )) ;
    }

    // if no item was found we return an array with the new item quantity set to 1
    return [...cartItems , {...cartItemToAdd , quantity : 1}] ;  
}