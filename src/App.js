import './App.css';
// do not import directly , to work with redux
import { addToCart } from './redux/action';
// importing way to work with redux - using useDispatch

import { useDispatch } from 'react-redux';

function App() {
const dispatch = useDispatch();
// sending data
const product = {
  name: 'Iphone',
  type: 'mobile',
  price: 11111,
  color: 'gray'
}
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
