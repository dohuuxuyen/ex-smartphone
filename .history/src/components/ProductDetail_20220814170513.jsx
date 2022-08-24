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
      <div>
        <div className="w-[100px] h-[137px]">
          {product.src.map((img) => (
            <img
              className="w-[100%] h-[100%] object-cover border "
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
