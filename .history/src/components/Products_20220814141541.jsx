import React from "react";
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
      <div className="grid grid-cols-4 gap-5 ">
        <div className="">
          <h2 className="uppercase font-semibold text-xl mb-2">Danh Mục</h2>
          <p className="ml-3 cursor-pointer p-1 opacity-70">Iphone</p>
          <p className="ml-3 cursor-pointer p-1 opacity-70">Samsung</p>
          <p className="ml-3 cursor-pointer p-1 opacity-70">Xiaomi</p>
        </div>
        <div className="grid grid-cols-3 col-start-2 col-end-5">
          {data.map((d) => (
            <div>
              <img src={d.src[0]} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
