import PRODUCTS from '../product-list';

export const addToCart = ({ id, quantity }, cart) => {
  const product = PRODUCTS.filter((product) => product.id === id)[0];
  let newCart = [];

  if (!cart.filter((entry) => entry.product.id === product.id).length) {
    newCart = [{ product, quantity: quantity }, ...cart];
  } else {
    newCart = cart.map((entry) =>
      entry.product.id === product.id ? Object.assign(entry, { quantity: entry.quantity + quantity }) : entry
    );
  }

  return newCart;
};

export const removeFromCart = ({ id, removeQuantity }, cart) => {
  const targetEntry = cart.find((entry) => entry.product.id === id);
  if (!targetEntry) return;

  const targetProduct = targetEntry.product;

  const newCart = cart
    .map(({ product, quantity }) => {
      if (product.id !== targetProduct.id) {
        return { product, quantity };
      } else {
        if (quantity > removeQuantity) {
          return { product, quantity: quantity - removeQuantity };
        }
      }

      return null;
    })
    .filter((entry) => entry);

  return newCart;
};

export const getCartTotalPrice = (cart) => {
  if (cart.length) {
    return cart.map(({ product, quantity }) => product.price * quantity).reduce((a, b) => a + b);
  } else {
    return 0;
  }
};
