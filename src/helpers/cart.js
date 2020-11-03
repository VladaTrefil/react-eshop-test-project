import PRODUCTS from '~/data/products'

export const addToCart = ({ id, quantity }, cart) => {
  const item = cart ? cart.find((item) => item.product.id === id) : false
  const finalQuantity = item ? item.quantity + quantity : quantity
  const product = PRODUCTS.find((product) => product.id === id)
  let newCart = []

  if (!item) {
    newCart = [{ product, quantity: quantity }, ...cart]
  } else {
    newCart = changeItemQuantity({ id, newQuantity: finalQuantity }, cart)
  }

  return newCart
}

export const removeFromCart = ({ id, removeQuantity }, cart) => {
  const newCart = cart
    .map(({ product, quantity }) => {
      if (product.id !== id) {
        return { product, quantity }
      } else {
        if (quantity > removeQuantity) {
          return { product, quantity: quantity - removeQuantity }
        }
      }

      return null
    })
    .filter((entry) => entry)

  return newCart
}

export const changeItemQuantity = ({ id, newQuantity }, cart) => {
  const newCart = cart
    .map(({ product, quantity }) => {
      if (product.id !== id) {
        return { product, quantity }
      } else {
        return { product, quantity: newQuantity }
      }
    })
    .filter((entry) => entry)

  return newCart
}

export const getCartSubtotal = (cart) => {
  if (cart && cart.length) {
    return cart.map(({ product, quantity }) => product.price * quantity).reduce((a, b) => a + b)
  } else {
    return 0
  }
}

export const getCartSize = (cart) => {
  if (cart && cart.length) {
    let cartSize = 0
    cart.map(({ product, quantity }) => (cartSize += quantity))
    return cartSize
  } else {
    return 0
  }
}
