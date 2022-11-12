// using useSelector to update count of cart icon when button is called 
// useSelector needs to pass a callback function 

import { useSelector } from "react-redux";

const Header = () =>{
    // state is callback
    // const result = useSelector((state) =>state)
    const result = useSelector((state) =>state.cartData)

    console.warn("redux daata in header", result);
    return(
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="cart image" />
            </div>
        </div>
    )
}

export default Header;