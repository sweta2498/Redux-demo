import { createStore } from "redux";
import rootReducer from "./Reducer/index";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import {persistStore} from "redux-persist";

const persitConfig={
    key:'persist-store',storage
    
}
const persistedReducer = persistReducer(persitConfig,rootReducer)

const store=createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor=persistStore(store)
export default store;