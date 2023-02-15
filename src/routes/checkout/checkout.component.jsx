import { useContext, useState } from "react";

import { CartContext } from "../../context/cart.context";

const CheckOut = () => {
  const { cartItems, addItemToCart, cartCount } = useContext(CartContext);

  const cartCountDecrement = () => {

  }

  return (
    <div>
      <div>
        <h4>Product</h4>
        <h4>Description</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
        <h4>Remove</h4>
      </div>
      <div>
        <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt=""/>
        <h2>Blue Jean Jacket</h2>
        <button>{ '<' }</button><h2>{ cartCount }</h2><button>{ '>' }</button>
        <h2>90</h2>
        <h2>X</h2>
      </div>
    </div>
  )
}

export default CheckOut;