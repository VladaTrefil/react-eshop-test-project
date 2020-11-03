import React from 'react'
import { Table, Body } from './styles'
import { useUserState } from '~/context/user'

import CheckoutItem from '#/CheckoutItem'

const CheckoutTable = ({ compact = false }) => {
  const [{ cart }, dispach] = useUserState()

  if (cart) {
    return (
      <Table>
        <Body>
          {cart.map(({ product, quantity }) => (
            <CheckoutItem key={product.id} product={product} quantity={quantity} compact={compact} />
          ))}
        </Body>
      </Table>
    )
  } else {
    return false
  }
}

export default CheckoutTable
