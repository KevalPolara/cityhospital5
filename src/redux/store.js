import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer/index";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import { themeReducer } from "../context/reducer/context.reducer";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from 'redux-saga';

const persisstConfig={
    key : 'root',
    storage:storage,
    whitelist: ['medicines','cart','auth', 'appoinment']
}

const persistedReducer =persistReducer(persisstConfig,rootReducer);
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware,thunk]


export const configureStore=()=>{
    let store=createStore(persistedReducer,applyMiddleware(...middlewares))
    // let persistor=persistStore(store)

    sagaMiddleware.run(rootSaga)


    return store;
}

export let store = configureStore();
export let persistor = persistStore(store)