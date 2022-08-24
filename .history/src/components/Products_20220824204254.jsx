import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data";
import Footer from "./Footer";

const Products = () => {
  const [filter, setFilter] = useState(data);
  const [isCheckbox, setIsCheckbox] = useState(false);

  const handleBrandChange = (e) => {
    setIsCheckbox(e.target.value);
  };

  const FilterProducts = (e) => {
    const updateListFilter = data.filter((x) => x.category === e);
    setFilter(updateListFilter);
  };

  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px] sm:px-2">
        <div className="bg-black text-white flex items-center justify-center h-8 sm:h-6 sm:text-[14px]">
          Uư đãi giảm 10% khi thanh toán trả trước
        </div>

        <div className="mt-8 mb-12 w-[50%] text-justify sm:w-[100%]">
          <p className="text-[#adadad] leading-5">
            Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần
            sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những
            sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
            mình.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-[50px] sm:flex flex-col">
          <div className="">
            <h2 className="uppercase font-semibold text-xl mb-2">Danh Mục</h2>
            <div className="sm:grid sm:grid-cols-3">
              <div className=" sm:border">
                <label
                  onClick={() => FilterProducts("samsung")}
                  className={
                    isCheckbox === "radio-1"
                      ? "ml-3 cursor-pointer p-1 mb-1  opacity-70 outline-none sm:flex sm:items-center active-brand"
                      : "ml-3 cursor-pointer p-1 mb-1  opacity-70 outline-none sm:flex sm:items-center"
                  }
                >
                  <input
                    className="mr-2"
                    type="radio"
                    name="radio-1"
                    onChange={handleBrandChange}
                    value="radio-1"
                    checked={isCheckbox === "radio-1"}
                  />
                  Samsung
                </label>
              </div>
              <div>
                <label
                  onClick={() => FilterProducts("iphone")}
                  className={
                    isCheckbox === "radio-2"
                      ? "ml-3 cursor-pointer p-1 mb-1  opacity-70 outline-none active-brand"
                      : "ml-3 cursor-pointer p-1 mb-1  opacity-70 outline-none"
                  }
                >
                  <input
                    className="mr-2"
                    type="radio"
                    name="radio-2"
                    onChange={handleBrandChange}
                    value="radio-2"
                    checked={isCheckbox === "radio-2"}
                  />
                  Iphone
                </label>
              </div>
              <div>
                <label
                  onClick={() => FilterProducts("xiaomi")}
                  className={
                    isCheckbox === "radio-3"
                      ? "ml-3 cursor-pointer p-1 mb-1  opacity-70 outline-none active-brand"
                      : "ml-3 cursor-pointer p-1 mb-1  opacity-70 outline-none"
                  }
                >
                  <input
                    className="mr-2"
                    type="radio"
                    name="radio-3"
                    onChange={handleBrandChange}
                    value="radio-3"
                    checked={isCheckbox === "radio-3"}
                  />
                  Xiaomi
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 col-start-2 col-end-5 gap-10 sm:grid-cols-2">
            {filter.map((product) => (
              <div key={product.id} className="text-center">
                <img
                  className="h-[319px] w-[319px] object-contain p-5 border rounded-md bg-[#F7FAF9]"
                  src={product.src[0]}
                  alt=""
                />
                <h3 className="mt-4 font-medium">{product.title}</h3>
                <p className="mt-3 mb-5">
                  {product.sizes[0].price} đ - {product.sizes[0].size}
                </p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="border rounded border-black bg-black text-white font-semibold p-2 hover:bg-white hover:text-black"
                >
                  CHỌN MUA
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
