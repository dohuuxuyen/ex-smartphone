import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.productReducer);
  return (
    <div className="mt-[70px]">
      <div>{}</div>
    </div>
  );
};

export default Cart;
