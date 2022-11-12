// all data are kept inside store file

import { createStore } from "redux";

// store is created with help from redux - you can workwith redux-toolkit
// 1 createStore

// const dummyStore = () =>{
//     return 100;
// }
// instead of dummy data now we can call actual data from reducer
import rootReducer from "./rootReducer";

// const store = createStore(dummyStore);
// instead of above dummyStore to pass , pass rootReducer
const store = createStore(rootReducer);


// above structure how reducer work 

// const store = createStore(() =>{
//     return 100;
// })

export default store;