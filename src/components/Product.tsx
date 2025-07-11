import { ProductType } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

export interface IProductProps {
  product: ProductType;
}

function Product({ product }: IProductProps) {
  return (
    <div className="p-4 flex flex-col justify-start items-center gap-2 w-[17rem] h-[23rem]">
      {/* image */}
      <div className="w-[13rem] h-[13rem]">
        <img className="w-full h-full" src={product.image} />
      </div>
      {/* title */}
      <h2 className="text-sm font-medium">{product.title}</h2>
      {/* price */}
      <div className="flex justify-start items-center w-full">
      <span className="text-sm font-light">{product.price} $</span>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        {/* add to cart */}
        <button className="bg-black text-white px-2 py-1 cursor-pointer rounded-lg hover:bg-gray-800 duration-200 text-sm font-medium">Add to cart</button>
        {/* product details btn */}
        <Link className="p-2 bg-gray-200 hover:bg-gray-400 duration-200 text-black rounded-full" href="/"><FaEye /></Link>
      </div>
    </div>
  );
}

export default Product;
