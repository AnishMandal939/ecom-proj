
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

// 
export const productData = (data=[], action) => {

    switch(action.type){
        // now we dont need this , because saga file is  now there to handle
        // case PRODUCT_LIST:
        //     // logic here, eg: product_listCart
        //     console.warn("PRODUCT_LIST called", action);
        //     return [action.data];
        case SET_PRODUCT_LIST:
            // logic here, eg: product_listCart
            console.warn("SET_PRODUCT_LIST called", action);
            return [...action.data];
        
        default:
        // no case matched 
        // return 'no action called';
        return data;

    }
}

// now go back to rootReducer

// after all basics go to Readme.md, when action is called how it noticed that the action is called lets discuss in Readme