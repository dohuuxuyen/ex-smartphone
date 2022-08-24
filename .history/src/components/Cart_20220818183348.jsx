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
          <img src={cartItem.product.src[cartItem.tabIndex]} alt="" />
          <div>{cartItem.product.colors[cartItem.colors]}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
