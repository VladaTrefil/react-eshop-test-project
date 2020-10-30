import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { Cell, ThumbnailCell, RemoveButton } from './styles'
import Thumbnail from '#/Thumbnail'
import Icon from '#/Icon'

export default function CheckoutItem({ product, quantity, removeFromCart, compact }) {
  return (
    <tr>
      <ThumbnailCell>
        <Link to={{ pathname: product.slug }}>
          <Thumbnail src={product.images.thumbnail} />
        </Link>
      </ThumbnailCell>
      <Cell>
        <Link to={{ pathname: product.slug }}>{product.name}</Link>
      </Cell>
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
