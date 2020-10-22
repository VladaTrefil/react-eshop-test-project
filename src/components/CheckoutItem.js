import React from 'react';
import { useUserState } from '../context/user';

import Thumbnail from './Thumbnail';

export default function CheckoutItem({ product, quantity }) {
  return (
    <tr>
      <td>
        <Thumbnail src={product.images.thumbnail} />
      </td>
      <td>{product.name}</td>
      <td>{quantity}</td>
      <td>$ {product.price}</td>
      <td>$ {product.price * quantity}</td>
      <td>
        <button onClick={() => removeFromCart(product.id, 1)}>x</button>
      </td>
    </tr>
  );
}
