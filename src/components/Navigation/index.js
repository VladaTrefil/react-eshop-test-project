import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Link } from './styles';

const Navigation = () => {
  return (
    <List>
      <NavLink to="/products">
        <Link>Our Products</Link>
      </NavLink>
      <NavLink to="/products">
        <Link>Contacts</Link>
      </NavLink>
    </List>
  );
};

export default Navigation;
