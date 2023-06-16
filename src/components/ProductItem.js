import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function ProductItem({ product }) {
  return (
    <div className="bg-white gap-y-1 p-3 flex  flex-col items-center text-center text-sm font-semibold relative">
      <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border border-gray-200  rounded-lg text-[#5d3ebc] shadow-md hover:text-white hover:bg-[#5d3ebc]">
        <AiOutlinePlus size={16}></AiOutlinePlus>
      </div>
      <img src={product.image} alt="" />
      <div className="text-[#5d3ebc]">{product.price}</div>
      <div className="text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}

export default ProductItem;
