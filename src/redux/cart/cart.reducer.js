import { cartTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [] ,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    // ! toggle cart
    case cartTypes.TOGGLE_CART:
      
      return {
        ...state,
        hidden: !state.hidden,
      };

    
    // ! add item to chart
    case cartTypes.ADD_ITEM:
      
      return {
        ...state,
        items:addItemToCart(state.items , action.payload),
      }

    // ! add item to chart
    case cartTypes.REMOVE_ITEM:
      
      return {
        ...state,
        items:state.items.filter(item => item.id !== action.payload.id),
      }
      
    default:
    return state;
  }
};

export default cartReducer ;