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
        <form className="w-[100%]" action="form">
          <div className="w-[550px]">
            <div className="w-[100%] p-5 border mb-10 rounded">
              <label className="uppercase font-semibold text-xl">
                Thông tin giao hàng
              </label>
              <input
                className="border border-[#767676] w-[100%]  text-[13px] px-3 py-2 rounded-[3px] my-5"
                type="text"
                placeholder="* Họ và tên"
                required
              />
              <input
                className="border border-[#767676] w-[100%]  text-[13px] px-3 py-2 rounded-[3px] mb-5"
                type="Email"
                placeholder="* Email"
                required
              />
              <input
                className="border border-[#767676] w-[100%]  text-[13px] px-3 py-2 rounded-[3px] mb-5"
                type="text"
                placeholder="* Số điện thoại"
                required
              />
              <input type="text" placeholder="để đó làm sau" />
              <input
                className="border border-[#767676] w-[100%]  text-[13px] px-3 py-2 rounded-[3px] mb-5"
                type="text"
                placeholder="* Tên đường..."
                required
              />
              <input
                className="border border-[#767676] w-[100%]  text-[13px] px-3 py-2 rounded-[3px] mb-1"
                type="text"
                placeholder="* Số nhà..."
                required
              />
              <label className="text-[13px]">
                (*) là trường không được bỏ trống
              </label>
            </div>
            <div className="w-[100%] p-5 border">
              <label className="uppercase font-semibold text-xl">
                Thông tin giao hàng
              </label>
              <input
                className="border border-[#767676] w-[100%]  text-[13px] px-3 py-2 rounded-[3px] my-5"
                type="text"
                placeholder="* Họ và tên"
                required
              />
            </div>
          </div>
        </form>
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
