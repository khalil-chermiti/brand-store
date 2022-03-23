import {combineReducers} from 'redux' ; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


// persistor config
const persitConfig = {
    key : 'root' ,
    storage :storage,
    whitelist : ['cart'] , 
}

// root reducer ;
const rootReducer = combineReducers({
    user : userReducer ,
    cart : cartReducer ,
});


// persistReducer return a rootReducer with persistance capabilities
export default persistReducer(persitConfig , rootReducer) ;