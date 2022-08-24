import React from "react";
import { useRef } from "react";
import { useState } from "react";
import data from "../data";
import dataEx from "../dataEx";

const Products = () => {
  const [filter, setFilter] = useState(data);

  const myRef = useRef();
  console.log(myRef.current);

  const FilterProducts = (index) => {
    const updateListFilter = data.filter((x) => x.category === "iphone");
    setFilter(updateListFilter);
  };

  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>

      <div className="mt-8 mb-12 w-[50%] text-justify">
        <p className="text-[#adadad] leading-5">
          Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ
          được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những sản
          phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 ">
        <div className="">
          <h2 className="uppercase font-semibold text-xl mb-2">Danh Mục</h2>
          {dataEx.map((ex, index) => (
            <p
              ref={myRef}
              key={ex.id}
              onClick={() => FilterProducts("category", index)}
              className="ml-3 cursor-pointer p-1 mb-1  opacity-70 "
            >
              {ex.title}
            </p>
          ))}
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
          {filter.map((d) => (
            <div key={d.id} className="text-center">
              <img
                className="h-[319px] w-[319px] object-contain p-5 border rounded-md bg-[#F7FAF9]"
                src={d.src[0]}
                alt=""
              />
              <h3 className="mt-4 font-medium">{d.title}</h3>
              <p className="my-3">
                {d.sizes[0].price} - {d.sizes[0].size}
              </p>
              <button className="border rounded border-black bg-black text-white font-semibold p-2 hover:bg-white hover:text-black">
                CHỌN MUA
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
