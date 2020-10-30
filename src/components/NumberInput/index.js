import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Container, Input, Button, Icon } from './styles'

const NumberInput = ({ max, setParentValue }) => {
  const [value, setValue] = useState(0)

  const updateValue = (newValue) => {
    if (newValue >= 0 && newValue <= max) {
      setValue(newValue)
      setParentValue(newValue)
    }
  }

  const handleInputChange = (event) => {
    const newValue = event.target.value
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
      <Button onClick={decrement}>
        <Icon>
          <FaMinus />
        </Icon>
      </Button>
      <Input value={value} onChange={handleInputChange} />
      <Button onClick={increment}>
        <Icon>
          <FaPlus />
        </Icon>
      </Button>
    </Container>
  )
}

export default NumberInput
