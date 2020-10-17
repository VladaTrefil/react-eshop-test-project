import React from 'react';
import ProductGrid from '../components/ProductGrid';

export default class Products extends React.Component {
  render() {
    return (
      <div>
        <h1>Products</h1>
        <ProductGrid products={this.props.products} addToCart={this.props.addToCart} />
      </div>
    );
  }
}
