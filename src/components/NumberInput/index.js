import React from 'react'
import { Container, Input } from './styles'
import IconButton from './button'
import { FaMinus, FaPlus } from 'react-icons/fa'

const NumberInput = ({ min = 1, max, value = 1, updateChanges }) => {
  const updateValue = (newValue) => {
    if (newValue >= min && newValue <= max) {
      updateChanges(newValue)
    }
  }

  const handleInputChange = (event) => {
    if (!event.target) return
    const newValue = parseInt(event.target.value)
    updateValue(newValue)
  }

  const increment = () => {
    const newValue = value + 1
    updateValue(newValue)
  }

  const decrement = () => {
    const newValue = value - 1
    updateValue(newValue)
  }

  return (
    <Container>
      <IconButton onClick={decrement} isDisabled={value <= min}>
        <FaMinus />
      </IconButton>
      <Input value={value} onChange={handleInputChange} />
      <IconButton onClick={increment} isDisabled={value >= max}>
        <FaPlus />
      </IconButton>
    </Container>
  )
}

export default NumberInput
