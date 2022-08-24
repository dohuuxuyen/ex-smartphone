const cart = [];

const productReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, product];
    default:
      return state;
  }
};

export default productReducer;
