import { addToCart, removeFromCart, changeItemQuantity } from '~/helpers/cart'

export const initialState = { cart: [] }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: addToCart(action.product, state.cart),
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: removeFromCart(action.product, state.cart),
      }
    case 'CHANGE_ITEM_QUANTITY':
      return {
        ...state,
        cart: changeItemQuantity(action.product, state.cart),
      }
    default:
  }
}
