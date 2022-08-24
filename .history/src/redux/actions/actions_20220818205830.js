export const addCartItem = (product) => {
  return {
    type: "ADD_CART_ITEM",
    payload: product,
  };
};

export const deleteCartItem = (product) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: product,
  };
};

export const qtyIncrease = (product) => {
  return {
    type: "QTY_INCREASE",
    payload: product,
  };
};

export const qtyDiscount = (product) => {
  return {
    type: "QTY_DISCOUNT",
    payload: product,
  };
};
