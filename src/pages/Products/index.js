import React, { useState } from 'react'
import { Wrapper, PageTitle, FilterHolder } from './styles'
import { getQueryParamsArray } from '~/helpers/query'
import RedirectHandler from './redirectHandler'
import Filter from '#/Filter'
import ProductGrid from '#/ProductGrid'
import { getCategoryBySlug } from '~/helpers/categories'

const Products = ({ products, categories }) => {
  const [activeTags, setActiveTags] = useState(() => {
    const params = getQueryParamsArray('tags')
    return params ? params.map((slug) => getCategoryBySlug(slug)) : []
  })

  return (
    <Wrapper>
      <RedirectHandler parameters={{ tags: activeTags }} />
      <PageTitle>Products</PageTitle>
      <FilterHolder>
        <Filter tags={categories} params={activeTags} setActiveTags={(tags) => setActiveTags(tags)} />
      </FilterHolder>
      <ProductGrid products={products} />
    </Wrapper>
  )
}

export default Products
