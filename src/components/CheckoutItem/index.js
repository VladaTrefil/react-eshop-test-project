import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Cell, ThumbnailCell, RemoveButton } from './styles'
import Thumbnail from '#/Thumbnail'
import Icon from '#/Icon'

export default function CheckoutItem({ product, quantity, removeFromCart, compact }) {
  return (
    <tr>
      <ThumbnailCell>
        <Thumbnail src={product.images.thumbnail} />
      </ThumbnailCell>
      <Cell>{product.name}</Cell>
      <Cell>{quantity}</Cell>
      {!compact ? <Cell>$ {product.price}</Cell> : false}
      <Cell>$ {product.price * quantity}</Cell>
      <Cell>
        <RemoveButton onClick={() => removeFromCart(product.id, 1)}>
          <Icon>
            <AiOutlineClose />
          </Icon>
        </RemoveButton>
      </Cell>
    </tr>
  )
}
