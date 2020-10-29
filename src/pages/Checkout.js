import React from 'react';
import styled from 'styled-components';
import { Wrapper, PageTitle } from '#/styled';
import CheckoutTable from '#/CheckoutTable';
import CheckoutSummary from '#/CheckoutSummary';

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Main = styled.div`
  width: calc(70% - 60px);
  margin-right 60px;
`;

const Sub = styled.div`
  width: 30%;
`;

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
  );
}
