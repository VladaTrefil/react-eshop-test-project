import React from 'react';
import styled from 'styled-components';
import ProductGrid from '../components/ProductGrid';
import { Wrapper } from '../components/Wrapper';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 80px;
  font-weight: bold;
  font-size: 3rem;
`;

export default class Products extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Products</Title>
        <ProductGrid products={this.props.products} addToCart={this.props.addToCart} />
      </Wrapper>
    );
  }
}
