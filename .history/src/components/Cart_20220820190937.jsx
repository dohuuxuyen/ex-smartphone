import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteCartItem,
  qtyDecrease,
  qtyIncrease,
} from "../redux/actions/actions";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Cart = ({ sizePrice, colorsOther, tabIndex }) => {
  const state = useSelector((state) => state.productReducer);
  console.log(state);
  let total = 0;
  let totalQty = 0;
  const dispatch = useDispatch();

  const handleDeleteCartItem = (cartItem) => {
    dispatch(deleteCartItem(cartItem));
  };

  const handleQtyIncrease = (cartItem) => {
    dispatch(qtyIncrease(cartItem));
  };

  const handleQtyDecrease = (cartItem) => {
    dispatch(qtyDecrease(cartItem));
  };

  return (
    <>
      <div className="w-[100%]  max-w-[1200px] mx-auto mt-[70px] mb-10">
        <div className="bg-black text-white flex items-center justify-center h-8">
          Uư đãi giảm 10% khi thanh toán trả trước
        </div>

        <div className="mt-[30px] flex">
          <div className="flex-1 mr-[30px] ">
            {state.map((cartItem) => {
              total += cartItem.qty * cartItem.sizes[sizePrice].price;
              totalQty += cartItem.qty;
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
                        onClick={() => handleQtyDecrease(cartItem)}
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
                        onClick={() => handleQtyIncrease(cartItem)}
                        className="border border-l-[#adadad] font-medium w-[30px]"
                      >
                        +
                      </button>
                    </div>
                    <div
                      onClick={() => handleDeleteCartItem(cartItem)}
                      className="text-[20px] ml-6 cursor-pointer"
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[400px] h-[233px] p-5 border mb-[200px]">
            <h2>Bạn đang có {totalQty} sản phẩm trong giỏ hàng</h2>
            <div className="flex justify-between items-center py-3">
              <h3>Thành tiền</h3>
              <p className="text-[26px] font-semibold">{total} VND</p>
            </div>
            <NavLink
              to="/checkout"
              className="w-[100%] uppercase text-white bg-black py-3 text-center rounded-md mb-2 block"
            >
              Đặt hàng
            </NavLink>
            <button className="w-[100%] uppercase text-white bg-black py-3 rounded-md ">
              Tiếp tục mua hàng
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
