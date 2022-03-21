import { createSelector } from "reselect"; 

// ! select user 
const selectUser = (state) => state.user ;

// ! select current user
export const selectCurrentUser = createSelector(
    selectUser ,
    (user) => user.currentUser
)