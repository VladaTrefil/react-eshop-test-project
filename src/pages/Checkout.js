import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../components/Wrapper';
import CheckoutTable from '../components/CheckoutTable';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 80px;
  font-weight: bold;
  font-size: 3rem;
`;

export default function Checkout() {
  return (
    <Wrapper>
      <Title>Cart:</Title>
      <CheckoutTable />
    </Wrapper>
  );
}
