import React from 'react'
import { Link } from 'react-router-dom'
import { Cell, ThumbnailCell, QuantityHolder } from './styles'
import Thumbnail from '#/Thumbnail'
import { RemoveFromCart, ChangeQuantity } from '#/CartInterface'

const CheckoutItem = ({ product, quantity, compact }) => {
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
      <Cell>
        <QuantityHolder>
          <ChangeQuantity id={product.id} stock={product.stock} quantity={quantity} />
        </QuantityHolder>
      </Cell>
      {!compact ? <Cell>$ {product.price}</Cell> : false}
      <Cell>$ {product.price * quantity}</Cell>
      <Cell>
        <RemoveFromCart id={product.id} />
      </Cell>
    </tr>
  )
}

export default CheckoutItem
