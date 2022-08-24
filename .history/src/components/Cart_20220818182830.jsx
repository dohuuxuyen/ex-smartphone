import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.productReducer);
  console.log(state);
  return (
    <div className="mt-[70px]">
      {state.map((cartItem) => (
        <div>
          <div>{cartItem.product.title}</div>
          <div>{cartItem.product.colors}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
