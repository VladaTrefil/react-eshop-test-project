import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUserState } from '../../context/user';
import { FaShoppingCart } from 'react-icons/fa';
import { Container, Number } from './styles';
import Icon from '../Icon';

export default function CartStatus() {
  const [{ id, cart }, dispach] = useUserState();
  let cartSize = 0;
  cart.map(({ product, quantity }) => (cartSize += quantity));

  return (
    <NavLink to="/cart">
      <Container>
        <Icon>
          <FaShoppingCart />
        </Icon>
        {cartSize > 0 ? <Number>{cartSize}</Number> : false}
      </Container>
    </NavLink>
  );
}
