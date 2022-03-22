import { userActionTypes } from "./user.types";

// the user reducer responds to actions and update the user state

const INITIAL_STATE = {
  currentUser : null ,
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case userActionTypes.SET_CURRENT_USER :
      return {
        ...state,
        currentUser: action.payload,
      };
      
    default:
      return state;
  }

};

export default userReducer;