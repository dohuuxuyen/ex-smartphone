import React from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-[#F7FAF9] fixed inset-x-0 top-0 z-[999]">
      <div className="w-[100%] max-w-[1200px] h-[100%] flex items-center justify-between mx-auto ">
        <ul className="flex">
          <li>
            <NavLink to="/" className="py-2 mr-3 font-semibold opacity-50">
              TRANG CHỦ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="py-2 mr-3 font-semibold opacity-50"
            >
              SẢN PHẨM
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="py-2 mr-3 font-semibold opacity-50">
              GIỚI THIỆU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="py-2 mr-3 font-semibold opacity-50"
            >
              LIÊN HỆ
            </NavLink>
          </li>
        </ul>
        <div className="ml-[-10%] text-xl font-semibold text-red-500">
          EX SMARTPHONE
        </div>
        <div className="flex ">
          <button className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white mr-2">
            <FiLogIn className="mr-2" />
            ĐĂNG NHẬP
          </button>
          <NavLink
            to="/cart"
            className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white"
          >
            <FiShoppingCart className="mr-2" />
            GIỎ HÀNG
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
