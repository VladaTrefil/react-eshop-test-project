import React from 'react';

export default class Cart extends React.Component {
  getTotalPrice = () => {
    if (this.props.cart.length) {
      return this.props.cart.map(({ product, quantity }) => product.price * quantity).reduce((a, b) => a + b);
    } else {
      return 0;
    }
  };

  removeFromCart = (id, removeQuantity) => {
    const targetEntry = this.props.cart.find((entry) => entry.product.id === id);
    if (!targetEntry) return;

    const targetProduct = targetEntry.product;

    const newCart = this.props.cart
      .map(({ product, quantity }) => {
        if (product.id !== targetProduct.id) {
          console.log(product, quantity);
          return { product, quantity };
        } else {
          if (quantity > removeQuantity) {
            console.log(product, quantity);
            return { product, quantity: quantity - removeQuantity };
          }
        }

        return null;
      })
      .filter((entry) => entry);

    this.props.updateCart(newCart);
  };

  render() {
    return (
      <div className="Cart">
        <h2>Cart:</h2>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Quantity</td>
              <td>Price/1</td>
              <td>Price total</td>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(({ product, quantity }) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{quantity}</td>
                <td>$ {product.price}</td>
                <td>$ {product.price * quantity}</td>
                <td>
                  <button onClick={() => this.removeFromCart(product.id, 1)}>x</button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td colSpan="3">total sum: $ {this.getTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
