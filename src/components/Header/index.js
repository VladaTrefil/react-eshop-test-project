import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Container, Inner, LogoHolder } from './styles';

import AppLogo from '../AppLogo';
import Navigation from '../Navigation';
import Icon from '../Icon';

const Header = () => {
  return (
    <Container>
      <Inner>
        <NavLink to="/">
          <AppLogo />
        </NavLink>

        <Navigation />

        <NavLink to="/cart">
          <Icon iconComponent={<FaShoppingCart />} />
        </NavLink>
      </Inner>
    </Container>
  );
};

export default Header;
