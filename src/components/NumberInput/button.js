import React from 'react'
import { Button, Icon } from './styles'

const IconButton = ({ onClick, isDisabled, children }) => {
  return (
    <Button onClick={onClick} isDisabled={isDisabled}>
      <Icon>{children}</Icon>
    </Button>
  )
}

export default IconButton
