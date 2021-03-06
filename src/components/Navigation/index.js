import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, List, Link, NavIcons } from './styles'
import CartStatus from '#/CartStatus'

const Navigation = ({ openCartSidebar }) => {
  return (
    <Container>
      <List>
        <NavLink to="/products">
          <Link>Products</Link>
        </NavLink>
        <NavLink to="/products">
          <Link>Contacts</Link>
        </NavLink>
      </List>

      <NavIcons>
        <CartStatus openCartSidebar={openCartSidebar} />
      </NavIcons>
    </Container>
  )
}

export default Navigation
