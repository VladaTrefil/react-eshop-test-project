import React from 'react'
import { Table, Body } from './styles'
import { useUserState } from '~/context/user'

import CheckoutItem from '#/CheckoutItem'

const CheckoutTable = ({ compact = false }) => {
  const [{ cart }, dispach] = useUserState()

  const removeFromCart = (id, removeQuantity) => {
    dispach({
      type: 'REMOVE_FROM_CART',
      product: { id, removeQuantity },
    })
  }

  return (
    <Table>
      <Body>
        {cart.map(({ product, quantity }) => (
          <CheckoutItem
            key={product.id}
            product={product}
            quantity={quantity}
            removeFromCart={removeFromCart}
            compact={compact}
          />
        ))}
      </Body>
    </Table>
  )
}

export default CheckoutTable
