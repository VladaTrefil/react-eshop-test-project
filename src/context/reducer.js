import { addToCart, removeFromCart } from '~/helpers/cart';

export const initialState = {
  id: null,
  cart: [
    {
      product: {
        id: '1',
        slug: '1',
        name: 'Mountains 1',
        category: 'winter',
        price: 1000,
        stock: 5,
        images: {
          thumbnail: require('~/images/products/1/thumbnail.jpg').default,
        },
      },
      quantity: 1,
    },
  ],
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
