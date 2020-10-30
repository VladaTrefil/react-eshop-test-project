import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PRODUCTS from '~/data/products'
import CATEGORIES from '~/data/categories'
import Theme from '~/context/themeProvider'

import Background from '#/Background'

import Homepage from '~/pages/Homepage'
import Products from '~/pages/Products'
import Checkout from '~/pages/Checkout'
import ProductDetail from '~/pages/ProductDetail'

const App = () => {
  return (
    <Theme>
      <Background />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/Checkout">
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
  )
}

export default App
