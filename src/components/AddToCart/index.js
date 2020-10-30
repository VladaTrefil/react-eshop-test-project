import React, { useState } from 'react'
import { useUserState } from '~/context/user'
import { Container, Button } from './styles'
import NumberInput from '#/NumberInput'

const AddToCart = ({ id, stock }) => {
  const [{ cart }, dispach] = useUserState()
  const [quantity, setQuantity] = useState(0)

  const addToCart = (id) => {
    dispach({
      type: 'ADD_TO_CART',
      product: { id, quantity },
    })
  }

  return (
    <Container>
      <NumberInput max={stock} setParentValue={(value) => setQuantity(value)} />
      <Button onClick={() => addToCart(id)}>add to cart</Button>
    </Container>
  )
}

export default AddToCart
