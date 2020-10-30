import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Inner, LogoHolder } from './styles'

import AppLogo from '#/AppLogo'
import Navigation from '#/Navigation'

const Header = ({ openCartSidebar }) => {
  return (
    <Container>
      <Inner>
        <NavLink to="/">
          <AppLogo />
        </NavLink>

        <Navigation openCartSidebar={openCartSidebar} />
      </Inner>
    </Container>
  )
}

export default Header
