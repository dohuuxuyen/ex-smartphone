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

    case "QTY_INCREASE":
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      );

    case "QTY_DECREASE":
      if (exits !== 1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};

export default productReducer;
