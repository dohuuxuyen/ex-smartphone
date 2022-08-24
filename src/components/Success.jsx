import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Success = () => {
  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] mb-[260px] sm:mb-[270px] sm:px-2 ">
        <div className="bg-black text-white flex items-center justify-center h-8 sm:h-6 sm:text-[14px]">
          Uư đãi giảm 10% khi thanh toán trả trước
        </div>
        <div className="mt-[200px] flex flex-col items-center justify-center">
          <h2 className="text-[20px] font-semibold">
            Bạn đã đặt hàng thành công!
          </h2>
          <div className="my-5 text-center ">
            <p className="text-[13px] opacity-70">
              Chúng tôi sẽ liên lạc với bạn qua số điện thoại để xác nhận lại
              đơn hàng.
            </p>
            <p className="text-[13px] opacity-70">
              Xin chân thành cảm ơn quý khách!
            </p>
          </div>
          <NavLink
            className="bg-black text-white px-3 py-2 rounded-md uppercase"
            to="/products"
          >
            Tiếp tục mua hàng
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
