import React from 'react';
import { useUserState } from '../context/user';

import CheckoutItem from './CheckoutItem';

export default function CheckoutTable() {
  const [{ id, cart }, dispach] = useUserState();

  const removeFromCart = (id, removeQuantity) => {
    dispach({
      type: 'REMOVE_FROM_CART',
      product: { id, removeQuantity },
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price/1</td>
          <td>Price total</td>
        </tr>
      </thead>
      <tbody>
        {cart.map(({ product, quantity }) => (
          <CheckoutItem key={product.id} product={product} quantity={quantity} />
        ))}
        <tr>
          <td></td>
          {/* <td colSpan="3">total sum: $ {getTotalPrice()}</td> */}
        </tr>
      </tbody>
    </table>
  );
}
