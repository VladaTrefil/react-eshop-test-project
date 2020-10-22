import { addToCart, removeFromCart } from '../helpers/cart';

export const initialState = {
  id: null,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: addToCart(action.product, state.cart),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: removeFromCart(action.product, state.cart),
      };
      break;
    default:
  }
};
