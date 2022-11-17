// do not import directly , to work with redux
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
// importing way to work with redux - using useDispatch

import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';

function Main() {
const dispatch = useDispatch();
// to get data using useSelector
const data = useSelector(state=> state.productData);
console.warn("data in main component", data);
// sending data
// const product = {
//   name: 'Iphone',
//   type: 'mobile',
//   price: 11111,
//   color: 'gray'
// }
// using useEffect to load data on load
  useEffect(() =>{
    dispatch(productList())
  }, [])

  return (
    <div className="main">
      {/* <button onClick={() => dispatch(addToCart(product))}>Add to cart</button><br /> */}
      {/* <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button> <br /> */}

      {/* <button onClick={() => dispatch(removeFromCart(product))}>Remove from cart</button> <br /> */}
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button><br /><br />

      {/* for product listing on click */}
      {/* <button onClick={() => dispatch(productList())}>Get Product List</button> */}

      {/* show data from saga */}

      <div className="product-container">
        {
          data.map((item) => <div className='product-item' key={item.id}>
            <img src={item.photo} alt={item.name} />
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id ))}>Remove from Cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
