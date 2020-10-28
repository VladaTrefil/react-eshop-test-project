import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PRODUCTS from './product-list';

import Theme from './context/theme';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

import { UserProvider } from './context/user';
import { reducer, initialState } from './context/reducer';

export default class App extends React.Component {
  render() {
    return (
      <Theme>
        <GlobalStyle />
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
      </Theme>
        </div>
      </UserProvider>
    );
  }
}
