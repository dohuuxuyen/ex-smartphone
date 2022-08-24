import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data";
import dataXxx from "../dataXxx";
import Footer from "./Footer";

const Products = () => {
  const [filter, setFilter] = useState(data);
  const [active, setActive] = useState();

  const FilterProducts = (e) => {
    const updateListFilter = data.filter((x) => x.category === e);
    setFilter(updateListFilter);
  };

  const handleAbc = (index) => {
    // setActive(index);
    FilterProducts("index");
    alert(index);
  };

  return (
    <>
      <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
        <div className="bg-black text-white flex items-center justify-center h-8">
          Uư đãi giảm 10% khi thanh toán trả trước
        </div>

        <div className="mt-8 mb-12 w-[50%] text-justify">
          <p className="text-[#adadad] leading-5">
            Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần
            sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những
            sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
            mình.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-[50px]">
          <div className="abc">
            <h2 className="uppercase font-semibold text-xl mb-2">Danh Mục</h2>
            <div>
              {dataXxx.map((xxx, index) => (
                <p
                  className={active === index ? "text-red-500" : ""}
                  onClick={() => handleAbc(xxx, index)}
                  key={index}
                >
                  {xxx.title}
                </p>
              ))}
            </div>
            {/* <p
              onClick={() => FilterProducts("iphone")}
              className="ml-3 cursor-pointer p-1 mb-1  opacity-70 "
            >
              Iphone
            </p>
            <p
              onClick={() => FilterProducts("samsung")}
              className="ml-3 cursor-pointer p-1 mb-1  opacity-70 "
            >
              Samsung
            </p>
            <p
              onClick={() => FilterProducts("xiaomi")}
              className="ml-3 cursor-pointer p-1  opacity-70 "
            >
              Xiaomi
            </p> */}
          </div>
          <div className="grid grid-cols-3 col-start-2 col-end-5 gap-10 ">
            {filter.map((product) => (
              <div key={product.id} className="text-center">
                <img
                  className="h-[319px] w-[319px] object-contain p-5 border rounded-md bg-[#F7FAF9]"
                  src={product.src[0]}
                  alt=""
                />
                <h3 className="mt-4 font-medium">{product.title}</h3>
                <p className="my-3">
                  {product.sizes[0].price} - {product.sizes[0].size}
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
