import React from 'react'
import { PriceHolder, Price } from './styles'
import { useUserState } from '~/context/user'
import { getCartSubtotal } from '~/helpers/cart'

export default function SubTotal() {
  const [{ cart }, dispach] = useUserState()

  return (
    <PriceHolder>
      sum total: <Price>$ {getCartSubtotal(cart)}</Price>
    </PriceHolder>
  )
}
