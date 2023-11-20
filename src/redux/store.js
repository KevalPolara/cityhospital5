import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer/index";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";

const persisstConfig={
    key : 'root',
    storage:storage,
    whitelist: ['medicines','cart']
}

const persistedReducer=persistReducer(persisstConfig,rootReducer)


export const configureStore=()=>{
    let store=createStore(persistedReducer,applyMiddleware(thunk))
    let persistor=persistStore(store)


    return {store,persistor};
}