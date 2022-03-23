import {combineReducers} from 'redux' ; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// persistor config
const persitConfig = {
    key : 'root' ,
    storage :storage,
    whitelist : ['cart' , 'directory' , 'shop'] , 
    // stateReconciler: autoMergeLevel2 ,
}

// root reducer ;
const rootReducer = combineReducers({
    user : userReducer ,
    cart : cartReducer ,
    directory : directoryReducer ,
    shop : shopReducer ,
});


// persistReducer return a rootReducer with persistance capabilities
export default persistReducer(persitConfig , rootReducer) ;