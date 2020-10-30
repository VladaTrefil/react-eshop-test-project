import React from 'react'
import { CloseButton, Container, Inner, Top, Bottom, Heading, GoToCheckout } from './styles'
import { useUserState } from '~/context/user'
import { getCartSize } from '~/helpers/cart'
import { AiOutlineClose } from 'react-icons/ai'

import Icon from '#/Icon'
import CheckoutTable from '#/CheckoutTable'
import SubTotal from '#/SubTotal'

const CartSidebar = ({ isOpen, closeCartSidebar }) => {
  const [{ cart }] = useUserState()
  const cartSize = getCartSize(cart)

  return (
    <Container isOpen={isOpen}>
      <CloseButton onClick={closeCartSidebar}>
        <Icon size="1.5">
          <AiOutlineClose />
        </Icon>
      </CloseButton>
      <Inner>
        <Top>
          <Heading>Cart ({cartSize})</Heading>
          <CheckoutTable compact={true} />
        </Top>
        <Bottom>
          <SubTotal />
          <GoToCheckout to="/checkout" onClick={closeCartSidebar}>
            Go to Checkout
          </GoToCheckout>
        </Bottom>
      </Inner>
    </Container>
  )
}

export default CartSidebar