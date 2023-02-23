import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from '../../store/category/category.selector';

// import { CategoriesContext } from "../../context/categories.context";

import { Title, CategoryContainer } from './category.styles';

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>

        { products &&
          products.map((product) => <ProductCard key={product.id} product={product} /> )
        }
      </CategoryContainer>
    </>
  )
}

export default Category;