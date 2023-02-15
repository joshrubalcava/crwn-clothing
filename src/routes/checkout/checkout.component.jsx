import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import CheckOutItems from "../../components/checkout-items/checkout-items.component";

import './checkout.styles.scss';

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  // const handleCartTotal = () => total(cartItems);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItems key={cartItem.id} cartItem={cartItem}/>
      ))}
      <span className='total'>{`$${cartTotal}`}</span>
    </div>
  )
}

export default CheckOut;