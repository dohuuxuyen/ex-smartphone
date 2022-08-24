import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ProductDetail = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [size, setSize] = useState();
  const productID = useParams();
  const productDetail = data.filter((x) => x.id == productID.id);
  const product = productDetail[0];
  console.log(product);

  const handleTabImg = (index) => {
    setTabIndex(index);
  };

  const handleSizePrice = (index) => {
    setSize(index);
  };
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto mt-[70px]">
      <div className="bg-black text-white flex items-center justify-center h-8">
        Uư đãi giảm 10% khi thanh toán trả trước
      </div>
      <div className="flex">
        <div className="w-[100px] h-[137px]">
          {product.src.map((img, index) => (
            <img
              onClick={() => handleTabImg(index)}
              key={index}
              className="w-[100%] h-[100%] object-cover border p-3 rounded-md mb-3 bg-[#F7FAF9] cursor-pointer"
              src={img}
              alt=""
            />
          ))}
        </div>
        <div className="w-[569px] h-[584px]">
          <img
            className="w-[100%] h-[100%] object-cover border mx-5 p-3 rounded-md bg-[#F7FAF9]"
            src={product.src[tabIndex]}
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
              {product.sizes.map((sp, index) => (
                <div
                  onClick={() => handleSizePrice(index)}
                  key={index}
                  className={
                    size
                      ? "border border-[#adadad] cursor-pointer mr-4 p-2 rounded-lg bg-red-500"
                      : "border border-[#adadad] cursor-pointer mr-4 p-2 rounded-lg"
                  }
                >
                  <p>{sp.size}</p>
                  <p>{sp.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="uppercase font-semibold text-[13px]">Màu sắc</h2>
            <div className="flex">
              {product.colors.map((color, index) => (
                <div
                  onClick={() => handleTabImg(index)}
                  key={index}
                  className="w-8 h-8 flex border border-[#adadad] rounded-[50%] mr-3 mt-2 cursor-pointer"
                  style={{ background: color }}
                ></div>
              ))}
            </div>
            <div className="my-5">
              <h2 className="uppercase font-semibold text-[13px] mb-2">
                Số lượng
              </h2>
              <div className="flex w-[120px] items-center border text-[16px] font-semibold border-[#adadad]">
                <button className="border border-r-[#adadad] w-[30px]">
                  -
                </button>
                <p className="flex-1 text-center">1</p>
                <button className="border border-l-[#adadad] w-[30px]">
                  +
                </button>
              </div>
            </div>
            <div className="flex">
              <button className="uppercase font-semibold px-4 py-2 border border-[#adadad] rounded-md bg-[#000] text-[#fff] mr-10">
                Thêm vào giỏ hàng
              </button>
              <button className="uppercase font-semibold px-4 py-2 border border-[#adadad] rounded-md bg-[#000] text-[#fff]">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 w-[685px]">
        <h1 className="text-[20px] uppercase font-semibold">
          Giới thiệu sản phẩm
        </h1>
        <p className="text-justify leading-5 my-5">{product.desc}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
