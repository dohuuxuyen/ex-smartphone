import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data";

const Products = () => {
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>

      <div className="mt-8 mb-12 w-[50%] text-justify">
        <h1 className="text-3xl font-semibold uppercase mb-2">Xiaomi</h1>
        <p className="text-[#adadad] leading-5">
          Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ
          được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những sản
          phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
        </p>
      </div>
      <div>
        <div>
          <h2 className="uppercase font-semibold text-xl mb-2">Danh Mục</h2>
          <NavLink
            to="/products"
            className="ml-3 cursor-pointer p-1 opacity-70"
            tabIndex="1"
          >
            Iphone
          </NavLink>
          <NavLink
            to="/products"
            className="ml-3 cursor-pointer p-1 opacity-70"
            tabIndex="2"
          >
            Samsung
          </NavLink>
          <NavLink
            to="/products"
            className="ml-3 cursor-pointer p-1 opacity-70"
            tabIndex="3"
          >
            Xiaomi
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
