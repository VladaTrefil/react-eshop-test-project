import React from 'react';
import styled from 'styled-components';
import { useUserState } from '../context/user';
import CheckoutItem from './CheckoutItem';
import SubTotal from './SubTotal';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  vertical-align: top;
`;

const Head = styled.thead`
  border-bottom: 1px solid grey;
`;

const Cell = styled.td`
  padding: 20px;
`;

export default function CheckoutTable() {
  const [{ id, cart }, dispach] = useUserState();

  const removeFromCart = (id, removeQuantity) => {
    dispach({
      type: 'REMOVE_FROM_CART',
      product: { id, removeQuantity },
    });
  };

  console.log(cart);
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
      <tbody>
        {cart.map(({ product, quantity }) => (
          <CheckoutItem key={product.id} product={product} quantity={quantity} />
        ))}
        <tr>
          <Cell colspan="4"></Cell>
          <Cell>
            <SubTotal />
          </Cell>
          <Cell></Cell>
        </tr>
      </tbody>
    </Table>
  );
}
