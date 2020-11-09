import CATEGORIES from '~/data/categories'

export const getCategoryBySlug = (slug) => {
  return CATEGORIES.find((category) => category.slug === slug)
}

export const getCategorySlug = (id) => {
  const target = CATEGORIES.find((category) => category.id === id)
  return target ? target.slug : false
}
