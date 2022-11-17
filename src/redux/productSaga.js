import {takeEvery, put} from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
// function* - function star is a generator function we use it here , it is asked in interview
// why do we use it ? 
// because it only return result if async operation is completed
// & whenever you use generator function you must have to use yeild(called while calling api)

function* getProducts(){
    // console.warn("get product saga called");
    // we dont need await keyword here , but use yield
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json(); // since data is not in json format so we used .json to convert it into json
    
    
    console.warn(" action called", data)
    yield put({type:  SET_PRODUCT_LIST, data})
}
// generator function
function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
}
export default productSaga;
// goto store.js