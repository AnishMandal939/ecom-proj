// do not import directly , to work with redux
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
// importing way to work with redux - using useDispatch

import { useDispatch } from 'react-redux';

function Main() {
const dispatch = useDispatch();
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
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button> <br />
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>


    </div>
  );
}

export default Main;
