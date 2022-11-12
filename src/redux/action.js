// action is a plain simple js function

import { ADD_TO_CART } from "./constant"

// action created
export const addToCart = (product) =>{
    console.warn("abc action called", product)
    // return 'abc'; - without passing type once you click to add to cart you will get error in console
    // using type
    return {
        type: ADD_TO_CART,
        // now directly sending data , but we'll use saga, all logic in future session
        data: product
    }
}

// to call action go to view files eg: App.js