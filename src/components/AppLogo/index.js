import React from 'react';
import { LogoHolder } from './styles';
import { FaShoppingBasket } from 'react-icons/fa';
import Icon from '../Icon';

const AppLogo = () => (
  <LogoHolder>
    <Icon iconComponent={<FaShoppingBasket />} size={1.5} />
    <span style={{ marginLeft: '15px' }}>ShoppingApp</span>
  </LogoHolder>
);

export default AppLogo;
