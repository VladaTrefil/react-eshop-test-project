import React from 'react'
import { Grid, Cell } from './styles'
import ProductCard from '#/ProductCard'

const ProductGrid = ({ products }) => (
  <Grid>
    {products.map((product) => (
      <Cell key={product.id}>
        <ProductCard product={product} />
      </Cell>
    ))}
  </Grid>
)

export default ProductGrid
