import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import CheckOutItems from "../../components/checkout-items/checkout-items.component";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItems key={cartItem.id} cartItem={cartItem}/>
      ))}
      <Total>{`$${cartTotal}`}</Total>
    </CheckoutContainer>
  )
}

export default CheckOut;