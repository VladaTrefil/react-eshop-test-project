import React from 'react';
import styled from 'styled-components';
import { useUserState } from '../context/user';
import Thumbnail from './Thumbnail';

const Cell = styled.td`
  vertical-align: top;
  padding: 40px 20px 10px;
`;

const ThumbnailCell = styled.td`
  width: 120px;
  padding-top: 30px;
`;

const NameCell = styled(Cell)``;

export default function CheckoutItem({ product, quantity }) {
  return (
    <tr>
      <ThumbnailCell>
        <Thumbnail src={product.images.thumbnail} />
      </ThumbnailCell>
      <Cell>{product.name}</Cell>
      <Cell>{quantity}</Cell>
      <Cell>$ {product.price}</Cell>
      <Cell>$ {product.price * quantity}</Cell>
      <Cell>
        <button onClick={() => removeFromCart(product.id, 1)}>x</button>
      </Cell>
    </tr>
  );
}
