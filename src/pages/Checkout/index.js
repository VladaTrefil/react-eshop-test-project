import React from 'react'
import { Wrapper, PageTitle, Inner, Main, Sub } from './styles'
import CheckoutTable from '#/CheckoutTable'
import CheckoutSummary from '#/CheckoutSummary'

const Checkout = () => {
  return (
    <Wrapper>
      <Inner>
        <PageTitle>Checkout</PageTitle>
        <Main>
          <CheckoutTable />
        </Main>
        <Sub>
          <CheckoutSummary />
        </Sub>
      </Inner>
    </Wrapper>
  )
}

export default Checkout
