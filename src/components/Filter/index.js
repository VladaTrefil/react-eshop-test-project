import React from 'react'
import { Container, List, Label, Item } from './styles'

const Filter = ({ categories }) => {
  return (
    <Container>
      <List>
        <Label>Categories:</Label>
        {categories.map(({ id, name, slug }) => (
          <Item key={id} to="/products">
            {name}
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default Filter
