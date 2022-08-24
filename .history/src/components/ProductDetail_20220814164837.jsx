import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ProductDetail = () => {
  const productID = useParams();
  const productDetail = data.filter((x) => x.id == productID.id);
  const product = productDetail[0];
  console.log(product);

  return (
    <div className="mt-[70px]">
      <img className="w-[100%] h-[100%]" src={product.src[0]} alt="" />
      <p>{product.title}</p>
    </div>
  );
};

export default ProductDetail;
