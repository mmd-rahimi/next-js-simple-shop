import { ProductType } from "@/types/types";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

export interface IProductProps {
  product: ProductType;
}

function Product({ product }: IProductProps) {
  return (
    <div
      className="p-4 flex flex-col items-center gap-2 w-[17rem] h-[23rem] 
      sm:h-[24rem] sm:w-[19rem]
      md:h-[23rem] md:w-[17rem]
      relative"
    >
      {/* image */}
      <div
        className="w-[13rem] h-[13rem]
        sm:w-[14rem] sm:h-[14rem]
        md:w-[13rem] md:h-[13rem]"
      >
        <img 
          className="w-full h-full object-contain hover:scale-105 duration-200" 
          src={product.image} 
          alt={product.title}
        />
      </div>
      
      {/* content container */}
      <div className="w-full flex flex-col items-center gap-2 mb-12">
        <h2 className="text-sm font-medium text-center line-clamp-2">
          {product.title}
        </h2>
        {/* price */}
        <div className="flex justify-start items-center w-full">
          <span className="text-sm font-light">{product.price} $</span>
        </div>
      </div>

      {/* buttons container - ABSOLUTE POSITION */}
      <div className="w-full absolute bottom-4 left-0 px-4">
        <div className="w-full flex flex-row justify-between items-center">
          {/* add to cart */}
          <button 
            className="bg-black text-white px-4 py-2 cursor-pointer rounded-lg 
            hover:bg-gray-800 duration-200 text-sm font-medium
            w-[70%]"
          >
            Add to cart
          </button>
          {/* product details btn */}
          <Link
            className="p-3 bg-gray-200 hover:bg-gray-400 duration-200 text-black 
            rounded-full flex items-center justify-center"
            href={`/products/${product.id}`}
          >
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;