import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import PRODUCTS from './product-list';
import './index.styl';

import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Cart from './pages/Cart';

class App extends React.Component {
  state = { cart: [], isCartOpen: false };

  updateCart = (newCart) => {
    this.setState({
      cart: newCart,
    });
  };

  addToCart = (id, quantity) => {
    const product = PRODUCTS.filter((product) => product.id === id)[0];
    let newCart = [];

    if (!this.state.cart.filter((entry) => entry.product.id === product.id).length) {
      // add new
      newCart = [{ product, quantity: quantity }, ...this.state.cart];
    } else {
      // change quantity
      newCart = this.state.cart.map((entry) =>
        entry.product.id === product.id ? Object.assign(entry, { quantity: entry.quantity + quantity }) : entry
      );
    }

    this.updateCart(newCart);
  };

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
        <div>
          <Switch>
            <Route path="/cart">
              <Cart cart={this.state.cart} updateCart={this.updateCart} />
            </Route>
            <Route path="/products">
              <Products products={PRODUCTS} addToCart={this.addToCart} />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
