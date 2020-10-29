import React from 'react';
import { useUserState } from '~/context/user';
import { Button } from './styled';

const AddToCart = ({ id }) => {
  const [{ ...cart }, dispach] = useUserState();

  const addToCart = (id, quantity) => {
    dispach({
      type: 'ADD_TO_CART',
      product: { id, quantity },
    });
  };

  return <Button onClick={() => addToCart(id, 1)}>add to cart</Button>;
};

export default AddToCart;
