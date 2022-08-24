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

      <div>
        <div className="w-[499px] h-[233px] border">
          <h2>Bạn đang có (0) sản phẩm trong giỏ hàng</h2>
          <div>
            <h3>Thành tiền</h3>
            <p>123 VND</p>
          </div>
          <button>Đặt hàng</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
