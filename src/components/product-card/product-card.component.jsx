import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import './product-card.styles.scss'

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={ `${ name }` }/>
      <div className='footer'>
        <span className='name'>{ name }</span>
        <span className='price'>{ `$${price}` }</span>
      </div>
      <Button buttonType='inverted' onClick={() => addItemToCart(products)}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard;