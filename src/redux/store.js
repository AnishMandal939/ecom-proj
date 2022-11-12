// all data are kept inside store file

// import { createStore } from "redux";

// instead of dummy data now we can call actual data from reducer
import { configureStore } from "@reduxjs/toolkit";
// import from saga
import productSaga from "./productSaga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
// by using redux-toolkit instead of createStore
const store = configureStore(
    {
        reducer:rootReducer,
        // register middleware & it takes callback 
        middleware:()=>[sagaMiddleware]
    }
    );

    // after register saga middleware you have to run it
    sagaMiddleware.run(productSaga);
    // now connect with productAction to work with api 


export default store;