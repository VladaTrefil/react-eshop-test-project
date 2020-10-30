import React from 'react'
import { useUserState } from '~/context/user'
import { getCartSize } from '~/helpers/cart'
import { FaShoppingCart } from 'react-icons/fa'
import { Number, Button } from './styles'
import Icon from '#/Icon'

const CartStatus = ({ openCartSidebar }) => {
  const [{ cart }] = useUserState()
  const cartSize = getCartSize(cart)

  return (
    <Button onClick={openCartSidebar}>
      <Icon>
        <FaShoppingCart />
      </Icon>
      {cartSize > 0 ? <Number>{cartSize}</Number> : false}
    </Button>
  )
}
export default CartStatus
