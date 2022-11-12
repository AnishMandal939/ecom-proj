
// in action we have addToCart as action but here we have cartData , because cartData can have remove , add, delete update action , so all fall inside cartData only , that's why we choosed to name cartData
// parameter: 1= we have to initialize it mandatory, 2nd = action - responsible for data sending(data/type that is beign send from action)
// data = blank array because cart data will increase or decrease & that is inside array so initialized blank array

import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

// 
export const cartData = (data=[], action) => {
    // console.warn(action);
    // checking type:
    // if(action.type === ADD_TO_CART){
    //     console.warn("reducer called", action);
    //     return action.data;

    // }else{
    // return "no action matched"
    // }
    // // it must return some value : Remember rules
    // return "abc"

    // using switch statement
    // eg: cart can have some actions like: add, update , remove,  clear, delete etc

    switch(action.type){
        case ADD_TO_CART:
            // logic here, eg: addToCart
            console.warn("add to cart called", action);
            // return 1+1;
            // action.data returns new data , where as ...data returns previous data by destructuring
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            // logic here, eg: addToCart
            console.warn("remove from cart called", action);
            return 1-1;
        default:
            // no case matched 
            // return 'no action called';
            return data;

    }
}

// now go back to rootReducer

// after all basics go to Readme.md, when action is called how it noticed that the action is called lets discuss in Readme