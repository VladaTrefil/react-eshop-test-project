import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useUserState } from '~/context/user'
import { RemoveButton } from './styles'
import Icon from '#/Icon'

const RemoveFromCart = ({ id, quantity }) => {
  const [{ cart }, dispach] = useUserState()

  const removeFromCart = (id, quantity) => {
    dispach({
      type: 'REMOVE_FROM_CART',
      product: { id, removeQuantity: quantity },
    })
  }

  return (
    <RemoveButton onClick={() => removeFromCart(id, quantity)}>
      <Icon>
        <AiOutlineClose />
      </Icon>
    </RemoveButton>
  )
}

export default RemoveFromCart
