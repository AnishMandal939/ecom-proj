// all data are kept inside store file

// import { createStore } from "redux";

// instead of dummy data now we can call actual data from reducer
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// const store = createStore(dummyStore);
// instead of above dummyStore to pass , pass rootReducer

// const store = createStore(rootReducer);
// by using redux-toolkit instead of createStore
const store = configureStore({reducer:rootReducer});


export default store;