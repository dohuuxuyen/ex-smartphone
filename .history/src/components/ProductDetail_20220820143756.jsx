import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../data";
import { addCartItem, deleteCartItem } from "../redux/actions/actions";

const ProductDetail = ({
  sizePrice,
  setSizePrice,
  colorsOther,
  setColorsOther,
  tabIndex,
  setTabIndex,
}) => {
  const [isProduct, setIsProduct] = useState("");
  const productID = useParams();
  const productDetail = data?.filter((x) => x.id == productID.id);
  const product = productDetail[0];

  const dispatch = useDispatch();

  const handleTabImg = (index) => {
    setTabIndex(index);
    setColorsOther(index);
  };

  const handleSizePrice = (index) => {
    setSizePrice(index);
  };

  const handleAddCart = (product) => {
    dispatch(addCartItem(product));
    setIsProduct(product);
  };

  const handleDeleteCart = (product) => {
    dispatch(deleteCartItem(product));
    setIsProduct("");
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
              className={
                colorsOther === index
                  ? "w-[100%] h-[100%] object-cover border p-3 rounded-md mb-3 bg-[#F7FAF9] cursor-pointer active-color"
                  : "w-[100%] h-[100%] object-cover border p-3 rounded-md mb-3 bg-[#F7FAF9] cursor-pointer"
              }
              src={img}
              alt=""
            />
          ))}
        </div>
        <div className="w-[100%] h-[100%] flex ">
          <img
            className="w-[569px] h-[584px] object-contain border mx-5 p-3 rounded-md bg-[#F7FAF9]"
            src={product.src[tabIndex]}
            alt=""
          />
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
                      sizePrice === index
                        ? "border border-[#adadad] cursor-pointer mr-4 p-2 rounded-lg active-size"
                        : "border border-[#adadad] cursor-pointer mr-4 p-2 rounded-lg"
                    }
                  >
                    <p>{sp.size}</p>
                    <p>{sp.price} đ</p>
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
                    className={
                      colorsOther === index
                        ? "w-8 h-8 flex  border-[2px] border-[#adadad] rounded-[50%] mr-3 mt-2 cursor-pointer active-color"
                        : "w-8 h-8 flex  border-[2px] border-[#adadad] rounded-[50%] mr-3 mt-2 cursor-pointer"
                    }
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
              <div className="my-5">
                <h2 className="uppercase font-semibold text-[13px]">Giá</h2>
                <p className="mt-1 font-semibold text-red-500">
                  {sizePrice
                    ? product.sizes[sizePrice].price
                    : product.sizes[0].price}{" "}
                  đ
                </p>
              </div>

              <div className="flex">
                {!isProduct ? (
                  <button
                    onClick={() => handleAddCart(product)}
                    className="uppercase font-semibold px-4 py-2 border border-[#adadad] rounded-md bg-[#000] text-[#fff] mr-10"
                  >
                    Thêm vào giỏ hàng
                  </button>
                ) : (
                  <button
                    onClick={() => handleDeleteCart(product)}
                    className="uppercase font-semibold px-4 py-2 border border-[#adadad] rounded-md bg-[#000] text-[#fff] mr-10"
                  >
                    Gỡ khỏi giỏ hàng
                  </button>
                )}
                <button className="uppercase font-semibold px-4 py-2 border border-[#adadad] rounded-md bg-[#000] text-[#fff]">
                  Mua ngay
                </button>
              </div>
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
