import React from 'react';
import styled from 'styled-components';
import { useUserState } from '../context/user';
import CheckoutItem from './CheckoutItem';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  vertical-align: top;
  text-align: center;
`;

const Head = styled.thead`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const Body = styled.tbody``;

const Cell = styled.td`
  padding: 10px;

  &:nth-child(1) {
    width: 120px;
  }

  &:nth-child(2) {
    width: 150px;
    text-align: left;
    padding-left: 20px;
    font-weight: 500;
  }
`;

export default function CheckoutTable() {
  const [{ id, cart }, dispach] = useUserState();

  const removeFromCart = (id, removeQuantity) => {
    dispach({
      type: 'REMOVE_FROM_CART',
      product: { id, removeQuantity },
    });
  };

  return (
    <Table>
      <Head>
        <tr>
          <Cell></Cell>
          <Cell>Name</Cell>
          <Cell>Quantity</Cell>
          <Cell>Price/1</Cell>
          <Cell>Price total</Cell>
          <Cell></Cell>
        </tr>
      </Head>
      <Body>
        {cart.map(({ product, quantity }) => (
          <CheckoutItem
            key={product.id}
            product={product}
            quantity={quantity}
            Cell={Cell}
            removeFromCart={removeFromCart}
          />
        ))}
      </Body>
    </Table>
  );
}
