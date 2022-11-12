import { PRODUCT_LIST } from "./constant"


export const productList = async() =>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json(); // since data is not in json format so we used .json to convert it into json
    // if using axios then you dont neet to convert to json direct data will work
    // doing only this it will throw error about action must be plain object , it asks for us to add middleware, like saga & thunk
    // i.e why we use saga to handle promise
    
    console.warn(" action called", data)
    return {
        type: PRODUCT_LIST,
        data:data
    }
}