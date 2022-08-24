export const addCartItem = (product) => {
  return {
    type: "ADD_CART_ITEM",
    payload: product,
  };
};
