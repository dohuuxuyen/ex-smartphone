import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.productReducer);
  console.log(state);
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>

      <div className="mt-[30px]">
        <div className="w-[499px] h-[233px] p-5 mr-[30px]  border">
          <h2>Bạn đang có (0) sản phẩm trong giỏ hàng</h2>
          <div className="flex justify-between items-center py-3">
            <h3>Thành tiền</h3>
            <p className="text-[26px] font-semibold">123 VND</p>
          </div>
          <button className="w-[100%] uppercase text-white bg-black py-3 center rounded-md mb-2">
            Đặt hàng
          </button>
          <button className="w-[100%] uppercase text-white bg-black py-3 center rounded-md">
            Đặt hàng
          </button>
        </div>
        <div>
          {state.map((cartItem, index) => (
            <div key={index} className="h-[150px] w-[100%]">
              <img src={cartItem.product.src[cartItem.tabIndex]} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
