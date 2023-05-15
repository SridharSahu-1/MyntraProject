import React, {useContext} from "react";
import Card from "../Card/Card";
import { cartContext } from "../App";
import EmptyCart from "../Pages/Checkout/EmptyCart";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Cart = () => {
  let {cart:cartItems,setCart} = useContext(cartContext);
  console.log(cartItems);
  cartItems = cartItems||[];  
  let totalPrice = 0;
  totalPrice = cartItems.length!==0 && cartItems.map((e) => totalPrice + Number(e.variant_price)) ;
  let discount = 0;
  discount =  cartItems.length!==0 && cartItems.map((e) => discount + Number(e.discount));
  let originalPrice = 0;
  originalPrice = cartItems.length!==0 && cartItems.map(
    (e) => originalPrice + Number(e.variant_compare_at_price)

  );

  return (
    <>
    <Navbar/>
    {cartItems.length!==0 ?
    <div className="cartPage">
      <div className="cartItemsList">
        {cartItems?.map((e, i) => <Card key={i} {...e} deleteitem/>)}
      </div>
      <div className="calculation">
        <p>Total Items {cartItems.length}</p>
        <p>Total Original Price{originalPrice}</p>
        <p>Discount {discount}</p>
        <p>Total Price {totalPrice}</p>
        <button>Buy</button>
      </div>
    </div>
    :
    <EmptyCart/>}
    <Footer/>
    </>
  );
};

export default Cart;
