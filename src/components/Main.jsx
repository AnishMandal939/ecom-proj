// do not import directly , to work with redux
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
// importing way to work with redux - using useDispatch

import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

function Main() {
const dispatch = useDispatch();
// to get data using useSelector
const data = useSelector(state=> state.productData);
console.warn("data in main component", data);
// sending data
const product = {
  name: 'Iphone',
  type: 'mobile',
  price: 11111,
  color: 'gray'
}
  return (
    <div className="main">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button><br />
      {/* <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button> <br /> */}

      <button onClick={() => dispatch(removeFromCart(product))}>Remove from cart</button> <br />
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button><br /><br />

      {/* for product listing on click */}
      <button onClick={() => dispatch(productList())}>Get Product List</button>



    </div>
  );
}

export default Main;
