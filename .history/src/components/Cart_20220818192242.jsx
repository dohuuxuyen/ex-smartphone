import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const state = useSelector((state) => state.productReducer);
  console.log(state);
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>

      <div className="mt-[30px] flex">
        <div className="w-[400px] h-[233px] p-5 mr-[30px]  border">
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
        <div className="flex-1">
          {state.map((cartItem, index) => (
            <div key={index} className="h-[150px] border flex items-center">
              <img
                className="h-[100%]"
                src={cartItem.product.src[cartItem.tabIndex]}
                alt=""
              />

              <div className="border w-[300px]">
                {cartItem.product.title} -{" "}
                {cartItem.product.colors[cartItem.colors]} -{" "}
                {cartItem.product.sizes[cartItem.size].size}
              </div>

              <div>{cartItem.product.sizes[cartItem.size].price}</div>

              <div className="flex w-[120px] items-center border text-[16px] font-semibold border-[#adadad]">
                <button className="border border-r-[#adadad] w-[30px]">
                  -
                </button>
                <p className="flex-1 text-center">1</p>
                <button className="border border-l-[#adadad] w-[30px]">
                  +
                </button>
              </div>
              <div className="text-[20px]">
                <RiDeleteBin6Line />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
