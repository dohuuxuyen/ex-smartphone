import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const Checkout = ({ colorsOther, sizePrice, tabIndex }) => {
  const state = useSelector((state) => state.productReducer);

  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>
      <div className="mt-[30px] w-[100%] flex justify-between">
        <div className="w-[48%] border">
          <div className="m-5">
            <h1 className="uppercase font-semibold text-xl mb-5">
              Thông tin giao hàng
            </h1>
            <input className="border outline-none w-[100%]" type="text" />
          </div>
        </div>
        <div className="w-[50%] overflow-hidden">
          {state.map((cartItem) => {
            // total += cartItem.qty * cartItem.sizes[sizePrice].price;
            return (
              <div className="flex">
                <div
                  key={cartItem.id}
                  className="h-[150px] border mb-2 flex items-center"
                >
                  <img
                    className="h-[100%] w-[120px] object-contain mr-2"
                    src={cartItem.src[tabIndex]}
                    alt=""
                  />

                  <div className="w-[340px] font-medium">
                    {cartItem.title} - {cartItem.colors[colorsOther]} -{" "}
                    {cartItem.sizes[sizePrice].size}
                  </div>

                  <div className="mx-5 w-[120px] text-center font-medium">
                    {cartItem.sizes[sizePrice].price} đ
                  </div>

                  <div className="flex w-[120px] items-center border text-[16px] border-[#adadad]">
                    <button
                      //   onClick={() => handleQtyDecrease(cartItem)}
                      className="border border-r-[#adadad] font-medium w-[30px]"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="w-[70%] outline-none text-center"
                      value={cartItem.qty}
                    />
                    <button
                      //   onClick={() => handleQtyIncrease(cartItem)}
                      className="border border-l-[#adadad] font-medium w-[30px]"
                    >
                      +
                    </button>
                  </div>
                  <div
                    // onClick={() => handleDeleteCartItem(cartItem)}
                    className="text-[20px] ml-6 cursor-pointer"
                  >
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
