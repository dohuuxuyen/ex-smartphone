import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] border border-gray-500">
      <div className="w-[100px] max-w-[1200px] h-[100%] px-[50px] flex items-center justify-between">
        <ul className="flex ">
          <li className="mr-5">
            <NavLink to="/" className="">
              TRANG CHỦ
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">SẢN PHẨM</NavLink>
          </li>
          <li>
            <NavLink to="/about">GIỚI THIỆU</NavLink>
          </li>
          <li>
            <NavLink to="/contact">LIÊN HỆ</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
