import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories,
)

export const selectCategoriesMap = createSelector(
	// checks to see if categories has changed. If it has, it will run the reduce method. If it has not changed,
	// reduce will not run, and it will not re-render
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);