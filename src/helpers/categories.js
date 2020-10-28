import CATEGORIES from '../data/categories';

export const getCategoryBySlug = (slug) => {
  return CATEGORIES.some((category) => category.slug === slug);
};
