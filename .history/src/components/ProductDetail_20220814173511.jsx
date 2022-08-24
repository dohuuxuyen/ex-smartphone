import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ProductDetail = () => {
  const productID = useParams();
  const productDetail = data.filter((x) => x.id == productID.id);
  const product = productDetail[0];
  console.log(product);

  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>
      <div className="flex">
        <div className="w-[100px] h-[137px]">
          {product.src.map((img) => (
            <img
              className="w-[100%] h-[100%] object-cover border p-3 rounded-md mb-3 bg-[#F7FAF9]"
              src={img}
              alt=""
            />
          ))}
        </div>
        <div className="w-[569px] h-[600px]">
          <img
            className="w-[100%] h-[100%] object-cover border mx-5 p-3 rounded-md bg-[#F7FAF9]"
            src={product.src[0]}
            alt=""
          />
        </div>
        <div className="ml-20 mt-5">
          <h1 className="uppercase text-[26px] font-semibold">
            {product.title}
          </h1>
          <div className=" my-5">
            <h2 className="uppercase font-semibold mb-2 text-[13px]">
              Lựa chọn phiên bản
            </h2>
            <div className="flex ">
              {product.sizes.map((sp) => (
                <div className="border mr-4 p-2 rounded-lg">
                  <p>{sp.size}</p>
                  <p>{sp.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="uppercase font-semibold text-[13px]">Màu sắc</h2>
            <div className="flex">
              {product.colors.map((color) => (
                <div
                  className="w-8 h-8 flex rounded-[50%] mr-3 mt-2 cursor-pointer"
                  style={{ background: color }}
                ></div>
              ))}
            </div>
            <div className="my-5">
              <h2 className="uppercase font-semibold text-[13px]">Số lượng</h2>
              <div className="flex w-[120px] items-center border">
                <button className="border px-2">-</button>
                <p>1</p>
                <button className="border px-2">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
