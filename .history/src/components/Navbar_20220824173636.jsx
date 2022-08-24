import React from "react";
import { useSelector } from "react-redux/";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ activeUser }) => {
  const state = useSelector((state) => state.productReducer);
  return (
    <div className="h-[70px] bg-[#F7FAF9] fixed inset-x-0 top-0 z-[999]">
      <div className="w-[100%] max-w-[1200px] h-[100%] flex items-center justify-between mx-auto">
        <ul className="flex sm:hidden">
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
        <div className="ml-[-5%] text-xl font-semibold text-red-500 sm:ml-0">
          EX SMARTPHONE
        </div>
        <div className="flex ">
          {activeUser ? (
            <div className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white mr-2">
              <FaUserCircle className="mr-2" />
              Admin
            </div>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white mr-2 sm:text-[10px] sm:w-[100px] sm:h-[30px]"
            >
              <FiLogIn className="mr-2" />
              ĐĂNG NHẬP
            </NavLink>
          )}
          <NavLink
            to="/cart"
            className="flex items-center border rounded border-black bg-white font-semibold p-2 hover:bg-black hover:text-white sm:text-[10px]  sm:h-[30px]"
          >
            <FiShoppingCart className="mr-2" />
            GIỎ HÀNG
            <p className="ml-1">({state.length})</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
