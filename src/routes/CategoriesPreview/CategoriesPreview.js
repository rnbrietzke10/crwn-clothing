import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';
import Spinner from '../../components/Spinner/Spinner';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className="category-preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
