import React from 'react'
import { Wrapper, PageTitle, Inner, Main, Sub } from './styles'
import CheckoutTable from '#/CheckoutTable'
import CheckoutSummary from '#/CheckoutSummary'

export default function Checkout() {
  return (
    <Wrapper>
      <Inner>
        <PageTitle>Cart</PageTitle>
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
