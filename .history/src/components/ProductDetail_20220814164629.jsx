import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ProductDetail = () => {
  const productID = useParams();
  const productDetail = data.filter((x) => x.id == productID.id);
  const product = productDetail[1];
  console.log(product);

  return (
    <div className="mt-[70px]">
      {/* <img src={product.title} alt="" /> */}
      <p>{product.title}</p>
    </div>
  );
};

export default ProductDetail;
