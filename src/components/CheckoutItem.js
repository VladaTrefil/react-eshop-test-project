import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Thumbnail from './Thumbnail';
import Icon from './Icon';

const ThumbnailCell = styled.td`
  width: 120px;
  padding-top: 30px;
`;

const RemoveButton = styled.button`
  display: flex;
  padding: 5px;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  transition: background 300ms, color 300ms;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default function CheckoutItem({ product, quantity, Cell, removeFromCart }) {
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
        <RemoveButton onClick={() => removeFromCart(product.id, 1)}>
          <Icon>
            <AiOutlineClose />
          </Icon>
        </RemoveButton>
      </Cell>
    </tr>
  );
}
