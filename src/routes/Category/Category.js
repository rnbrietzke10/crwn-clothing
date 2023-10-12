import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/Categories.context';

import ProductCard from '../../components/ProductCard/ProductCard';
import { Title, CategoryContainer } from './Category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
