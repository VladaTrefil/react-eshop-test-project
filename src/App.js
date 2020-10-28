import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PRODUCTS from './data/products';
import CATEGORIES from './data/categories';

import Theme from './context/theme';
import GlobalStyle from './components/GlobalStyle';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';

export default class App extends React.Component {
  render() {
    return (
      <Theme>
        <GlobalStyle />

        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/cart">
            <Checkout />
          </Route>

          <Route path="/products">
            <Products products={PRODUCTS} categories={CATEGORIES} />
          </Route>

          <Route path="/:slug">
            <ProductDetail />
          </Route>
        </Switch>
      </Theme>
    );
  }
}
