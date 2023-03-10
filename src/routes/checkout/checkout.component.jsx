import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckOutItems from "../../components/checkout-items/checkout-items.component";
import PaymentForm from '../../components/payment-form/payment-form.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)

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
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default CheckOut;