import React, { useState } from 'react'
import { Container, List, Label, Item } from './styles'

const Filter = ({ tags, params, setActiveTags }) => {
  const handleClick = (id) => {
    const index = params.findIndex((category) => category === id)
    const selectedTags = params.slice()

    if (index !== -1) {
      selectedTags.splice(index, 1)
    } else {
      selectedTags.push(id)
    }

    setActiveTags(selectedTags)
  }

  const isActive = (id) => {
    return params.some((category) => category === id)
  }

  return (
    <Container>
      <List>
        <Label>Categories:</Label>
        {tags.map(({ id, name, slug }) => (
          <Item key={id} onClick={() => handleClick(id)} isActive={isActive(id)}>
            {name}
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default Filter
