import React from 'react';
import { LogoHolder, LogoName } from './styles';
import { FaShoppingBasket } from 'react-icons/fa';
import Icon from '#/Icon';

const AppLogo = () => (
  <LogoHolder>
    <Icon size={1.5}>
      <FaShoppingBasket />
    </Icon>
    <LogoName style={{ marginLeft: '15px' }}>ShoppingApp</LogoName>
  </LogoHolder>
);

export default AppLogo;
