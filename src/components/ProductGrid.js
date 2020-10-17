import React from 'react';

export default class ProductGrid extends React.Component {
  state = {
    products: this.props.products,
  };

  render() {
    return (
      <div className="ProductGrid">
        {this.state.products.map((product) => (
          <ProductCell key={product.id} product={product} onAddButtonClick={this.props.addToCart} />
        ))}
      </div>
    );
  }
}

const ProductCell = ({ product, onAddButtonClick }) => {
  return (
    <div className="ProductCell">
      <Thumbnail src={product.images.color} />
      <h3 className="ProductCell-name">{product.name}</h3>
      <Price price={product.price} />
      <button type="button" onClick={() => onAddButtonClick(product.id, 1)}>
        Add to cart
      </button>
    </div>
  );
};

const Thumbnail = ({ src }) => {
  return <div className="Thumbnail" style={{ background: src }}></div>;
};

const Price = ({ price }) => {
  return <div className="Price">$ {price}</div>;
};
