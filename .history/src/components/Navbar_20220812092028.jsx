import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] border border-gray-500">
      <div className="w-[100px] max-w-[1200px] h-[100%] px-[50px] flex items-center justify-between">
        <div className="flex justify-between">
          <NavLink to="/">TRANG CHỦ</NavLink>
          <NavLink to="/">SẢN PHẨM</NavLink>
          <NavLink to="/">GIỚI THIỆU</NavLink>
          <NavLink to="/">LIÊN HỆ</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
