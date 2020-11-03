import React, { useState } from 'react'
import { useUserState } from '~/context/user'
import { Container, ErrorMessage, Button } from './styles'
import NumberInput from '#/NumberInput'

const AddToCart = ({ id, stock }) => {
  const [{ cart }, dispach] = useUserState()
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const displayError = (errorMessage) => {
    return errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : false
  }

  const displayButtonContent = (successMessage) => {
    setTimeout(() => setSuccess(null), 3000)
    return <span>{successMessage || 'add to cart'}</span>
  }

  const addToCart = (id, addQuantity) => {
    const item = cart ? cart.find(({ product }) => product.id === id) : false
    const finalQuantity = item ? item.quantity + addQuantity : addQuantity

    if (finalQuantity <= stock) {
      dispach({
        type: 'ADD_TO_CART',
        product: { id, quantity: addQuantity },
      })

      setError(null)
      setSuccess(`Added ${addQuantity} to cart`)
    } else {
      setError('Not enough left in stock')
    }
  }

  return (
    <Container>
      <NumberInput max={stock} value={quantity} updateChanges={(value) => setQuantity(value)} />
      {displayError(error)}
      <Button onClick={() => addToCart(id, quantity)}>{displayButtonContent(success)}</Button>
    </Container>
  )
}

export default AddToCart
