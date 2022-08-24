import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Success = ({ activeUser, setActiveUser }) => {
  const handleLogout = () => {
    setActiveUser(false);
  };
  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] sm:px-2">
        <div className="mt-[250px] flex flex-col items-center justify-center">
          <h2 className="text-[20px] font-semibold">
            Bạn đã đặt hàng thành công!
          </h2>
          <span>
            Chúng tôi sẽ liên lạc với bạn qua số điện thoại để xác nhận lại đơn
            hàng.
          </span>
          <span>Xin chân thành cảm ơn quý khách!</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
