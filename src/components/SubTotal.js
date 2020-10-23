import React from 'react';
import styled from 'styled-components';
import { useUserState } from '../context/user';
import { getCartSubtotal } from '../helpers/cart';

const PriceHolder = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

export default function SubTotal() {
  const [{ id, cart }, dispach] = useUserState();

  return (
    <PriceHolder>
      sum: <Price>$ {getCartSubtotal(cart)}</Price>
    </PriceHolder>
  );
}
