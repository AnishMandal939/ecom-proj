// action is a plain simple js function

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

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

export const removeFromCart = (product) =>{
    console.warn("abc action called", product)
    // return 'abc'; - without passing type once you click to add to cart you will get error in console
    // using type
    return {
        type: REMOVE_FROM_CART,
        // now directly sending data , but we'll use saga, all logic in future session
        data: product
    }
}


export const emptyCart = () =>{
    // since we dont need data here we dont use parameters , this is because we are not sending anything to it
    console.warn("empty action called");
    return{
        type: EMPTY_CART,
        // data: product
    }
}

// to call action go to view files eg: App.js