import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PRODUCTS from './product-list';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

import { UserProvider } from './context/user';
import { reducer, initialState } from './context/reducer';

export default class App extends React.Component {
  render() {
    return (
      <UserProvider reducer={reducer} initialState={initialState}>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path="/cart">
                <Checkout />
              </Route>
              <Route path="/products">
                <Products products={PRODUCTS} />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
        </div>
      </UserProvider>
    );
  }
}
