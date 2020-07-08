import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory.reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer);