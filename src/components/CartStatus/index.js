import React from "react";
import { NavLink } from "react-router-dom";
import { useUserState } from "~/context/user";
import { getCartSize } from "~/helpers/cart";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Number } from "./styles";
import Icon from "#/Icon";

export default function CartStatus() {
  const [{ cart }] = useUserState();
  const cartSize = getCartSize(cart);

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
