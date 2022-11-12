// 1 project can have many rootReducer , but store can only connect with one reducer , & that is why we create rootReducer which helps to combine all reducer in one place to import and export

import { combineReducers } from "redux"; // important to work with 
// import our reducer then
import  {cartData} from './reducer';

import {productData} from './productReducer'
// export combine reducer
export default combineReducers({
    cartData: cartData,
    productData
});

// now to see actual data go back to store
