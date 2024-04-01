import { createSelector } from 'reselect';

const selectCategories = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.categories.reduce((acc, category) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
