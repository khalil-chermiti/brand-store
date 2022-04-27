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

export const decreaseItemCount = (cartItems, itemToDecrease) => {

  // find item to decrease
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);

  // if quantity is 1 remove the item
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }

  // else decrease quantity by one
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: --cartItem.quantity }
      : cartItem
  );
};