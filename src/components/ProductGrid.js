import React from 'react';
import ProductCard from './ProductCard';

export default class ProductGrid extends React.Component {
  state = {
    products: this.props.products,
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <ProductCard key={product.id} product={product} onAddButtonClick={this.props.addToCart} />
        ))}
      </div>
    );
  }
}
