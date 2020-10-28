import React from 'react';
import styled from 'styled-components';
import { Button } from './styled';
import SubTotal from './SubTotal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerLegend = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 10px 20px;
`;

export default function CheckoutSummary() {
  return (
    <Container>
      <ContainerLegend>Summary:</ContainerLegend>
      <SubTotal />
      <Button>Transfer and Shipping</Button>
    </Container>
  );
}
