// all data are kept inside store file

import { createStore } from "redux";

// store is created with help from redux - you can workwith redux-toolkit
// 1 createStore

const dummyStore = () =>{
    return 100;
}

const store = createStore(dummyStore);

// above structure how reducer work 

// const store = createStore(() =>{
//     return 100;
// })

export default store;