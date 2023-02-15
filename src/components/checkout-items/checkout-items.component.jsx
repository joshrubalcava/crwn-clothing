import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import './checkout-items.styles.scss';

const CheckOutItems = ({cartItem}) => {
  const { clearItemFromCart, addItemToCart, removeCartItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeCartItem(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={ `${ name }`}/>
      </div>
      <span className='name'>
        <span>{name}</span>
      </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckOutItems;