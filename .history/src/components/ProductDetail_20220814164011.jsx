import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ProductDetail = () => {
  const productID = useParams();
  const productDetail = data.filter((x) => x.id === productID.id);
  const product = productDetail[0];

  return <div className="mt-[70px]">ProductDetail</div>;
};

export default ProductDetail;
