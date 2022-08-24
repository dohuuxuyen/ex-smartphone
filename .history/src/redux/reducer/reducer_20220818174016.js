const cart = [];

const productReducer = (state = cart, action) => {
  const product = action.payload;
  const exits = state.find((x) => x.id === product.id);
  switch (action.type) {
    case "ADD_CART_ITEM":
      if (!exits) {
        return [...state, { ...product, qty: 1 }];
      }
      return state;

    case "DELETE_CART_ITEM":
      return state.filter((x) => x.id !== exits.id);
    default:
      return state;
  }
};

export default productReducer;
