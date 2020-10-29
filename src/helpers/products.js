import PRODUCTS from '~/data/products';

export const getProductBySlug = (slug) => {
  return PRODUCTS.find((product) => product.slug === slug);
};
