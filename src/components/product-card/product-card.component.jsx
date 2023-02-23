// import { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Button from "../button/button.component";
// import { CartContext } from "../../context/cart.context";
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={ `${ name }` }/>
      <Footer>
        <Name>{ name }</Name>
        <Price>{ `$${price}` }</Price>
      </Footer>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;