import React from 'react';
import styled from 'styled-components';
import ProductCard from '#/ProductCard';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${(30 / 1080) * 100}%;
`;

const Cell = styled.div`
  width: ${(320 / 1140) * 100}%;
  margin: 0 ${(30 / 1140) * 100}% 60px;
`;

export default class ProductGrid extends React.Component {
  state = {
    products: this.props.products,
  };

  render() {
    return (
      <Grid>
        {this.state.products.map((product) => (
          <Cell key={product.id}>
            <ProductCard product={product} />
          </Cell>
        ))}
      </Grid>
    );
  }
}
