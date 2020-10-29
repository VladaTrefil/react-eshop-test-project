import React from 'react'
import { Grid, Cell } from './styles'
import ProductCard from '#/ProductCard'

export default class ProductGrid extends React.Component {
  state = {
    products: this.props.products,
  }

  render() {
    return (
      <Grid>
        {this.state.products.map((product) => (
          <Cell key={product.id}>
            <ProductCard product={product} />
          </Cell>
        ))}
      </Grid>
    )
  }
}
