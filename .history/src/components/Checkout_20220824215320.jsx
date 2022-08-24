import React from "react";
import { useSelector } from "react-redux";
import { RiVisaLine } from "react-icons/ri";
import { MdPayment, MdDirectionsBike } from "react-icons/md";
import { useState } from "react";
import Footer from "./Footer";

const Checkout = ({ colorsOther, sizePrice, tabIndex }) => {
  const [currentRadioValue, setCurrentRadioValue] = useState("radio-3");
  const state = useSelector((state) => state.productReducer);
  var total = 0;

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
  };

  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-10 sm:px-2">
        <div className="bg-black text-white flex items-center justify-center h-8 sm:h-6 sm:text-[14px]">
          Uư đãi giảm 10% khi thanh toán trả trước
        </div>
        <div className="mt-[30px] w-[100%] flex justify-between">
          <form className="w-[100%] flex justify-between sm:flex-col">
            <div className="w-[49%] sm:w-[100%]">
              <div className="w-[100%] p-5 border mb-10 rounded-md">
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
                <div className="flex justify-between text-[13px] mb-5">
                  <input
                    className="w-[33%] border border-[#767676] px-3 py-2 rounded-[3px]"
                    type="text"
                    placeholder="* Xã"
                    required
                  />
                  <input
                    className="w-[33%] border border-[#767676] px-3 py-2 rounded-[3px]"
                    type="text"
                    placeholder="* Quận"
                    required
                  />
                  <input
                    className="w-[33%] border border-[#767676] px-3 py-2 rounded-[3px]"
                    type="text"
                    placeholder="* Tỉnh"
                    required
                  />
                </div>
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
              <div className="w-[100%] p-5 border rounded-md">
                <label className="uppercase font-semibold text-xl">
                  Phương thức thanh toán
                </label>
                <div className="my-5 flex items-center border py-2 px-3">
                  <input
                    className=""
                    type="radio"
                    name="radio-1"
                    onChange={handleRadioChange}
                    value="radio-1"
                    checked={currentRadioValue === "radio-1"}
                  />
                  <RiVisaLine className="mx-3" />
                  <p>Thanh toán thẻ (ATM, Visa , MasterCard)</p>
                </div>
                <div className="my-5 flex items-center border py-2 px-3">
                  <input
                    type="radio"
                    name="radio-2"
                    onChange={handleRadioChange}
                    value="radio-2"
                    checked={currentRadioValue === "radio-2"}
                  />
                  <MdPayment className="mx-3" />
                  <p>Thanh toán bằng ví ShopeePay</p>
                </div>
                <div className="my-5 flex items-center border py-2 px-3">
                  <input
                    type="radio"
                    name="radio-3"
                    onChange={handleRadioChange}
                    value="radio-3"
                    checked={currentRadioValue === "radio-3"}
                  />
                  <MdDirectionsBike className="mx-3" />
                  <p>Thanh toán khi giao hàng (COD)</p>
                </div>
              </div>
            </div>
            <div className="w-[49%] border rounded-md sm:w-[100%]">
              <div className="w-[100%] p-2 max-h-[520px] overflow-y-scroll  border-b-[1px]">
                {state.map((cartItem) => {
                  total += cartItem.qty * cartItem.sizes[sizePrice].price;
                  return (
                    <div className="flex h-[100px] mb-1">
                      <div
                        key={cartItem.id}
                        className="h-[100px] border mb-2 flex items-center py-3 rounded-md sm:w-[100%]"
                      >
                        <img
                          className="h-[100%] w-[120px] object-contain mr-1 sm:w-[100px] "
                          src={cartItem.src[tabIndex]}
                          alt=""
                        />

                        <div className="flex w-[100%] items-center sm:flex-col">
                          <div className="w-[200px] font-medium sm:w-[100%]">
                            {cartItem.title} - {cartItem.colors[colorsOther]} -{" "}
                            {cartItem.sizes[sizePrice].size}
                          </div>

                          <div className="mx-5 w-[120px] text-center font-medium sm:my-1 sm:mx-0 sm:w-[100%] sm:text-left ">
                            {cartItem.sizes[sizePrice].price} đ
                          </div>

                          <div className="flex w-[70px] border items-center  justify-center text-[16px] border-[#adadad] rounded-md mr-2 sm:ml-[-175px]">
                            <input
                              type="text"
                              className="w-[70%] outline-none text-center "
                              value={`SL: ${cartItem.qty}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-2">
                <div className=" font-bold flex items-center justify-between mt-5 ">
                  <h2>Tổng:</h2>
                  <p>{total} VND</p>
                </div>
                <div className=" flex items-center justify-between mt-3 ">
                  <h2>Phí ship:</h2>
                  <p>20,000 VND</p>
                </div>
                <div className=" font-bold flex items-center justify-between my-3 ">
                  <h2>Thành tiền:</h2>
                  <p>{total + 20000} VND</p>
                </div>
                <button
                  className="uppercase py-2 w-[100%] bg-black text-white cursor-pointer rounded-md text-center"
                  type="submit"
                >
                  Hoàn tất đơn hàng
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
