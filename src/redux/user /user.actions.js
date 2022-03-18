// this function returns an action to be dispatched to state 

const setCurrentUser = user => ({
    type : "SET_CURRENT_USER" ,
    payload : user 
});

export default setCurrentUser ;