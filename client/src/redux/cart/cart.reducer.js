import { cartTypes } from "./cart.types";
import { addItemToCart , decreaseItemCount} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [] ,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartTypes.ADD_ITEM:
      return {
        ...state,
        items:addItemToCart(state.items , action.payload),
      }

    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        items:state.items.filter(item => item.id !== action.payload.id),
      }
 
    case cartTypes.DECREASE_ITEM_COUNT:
      return {
        ...state,
        items: decreaseItemCount(state.items , action.payload),
      }
    case cartTypes.CLEAR_CART : 
	  return {
		...state , 
		items : [] ,
	  }
    default:
    return state;
  }
};

export default cartReducer ;