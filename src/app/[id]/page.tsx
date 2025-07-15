import { IProductDetailParams, TProductType } from "@/types/types";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

async function ProductDetail({ params }: IProductDetailParams) {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/Products/${id}`);
  const product: TProductType = await res.json();

  return (
    <div
      className="flex flex-col gap-8 items-center justify-center px-6
    md:flex-row md:items-start"
    >
      {/* image */}
      <div
        className="w-[15rem] h-[15rem] flex items-center justify-center relative
      md:w-[50%] md:h-full md:sticky md:top-0 md:self-center"
      >
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="md:w-[50%]">
        {/* category & title & rating */}
        <div className="w-full">
          <div className="w-full flex flex-row justify-between items-start pb-4 border-b">
            <div className=" flex flex-col gap-2">
              <h3 className="font-normal lg:text-xl">{product.category}</h3>
              <h1
                className="text-lg font-medium
              md:text-xl
               lg:text-3xl
                xl:text-4xl"
              >
                {product.title}
              </h1>
            </div>
            <span
              className="flex flex-col items-center justify-center text-sm font-light text-yellow-400
            md:text-[1rem]
             lg:text-lg
             xl:text-xl"
            >
              <BsStarFill />
              {product.rating?.rate}
            </span>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-row mt-4">
          <p
            className="font-normal text-sm
        md:text-[1rem]
         lg:text-lg
         xl:text-xl"
          >
            {product.description}
          </p>
        </div>
        {/* price & add btn */}
        <div
          className="flex flex-row justify-between items-center w-full mt-4
        md:text-lg
         lg:text-xl
         xl:text-2xl"
        >
          <span className="font-medium border-b">{product.price} $</span>
          <div>
            <button
              className="flex flex-row justify-center items-center bg-black text-white p-2 rounded-2xl gap-1 font-medium hover:bg-gray-700 cursor-pointer duration-200 
          w-[5rem] 
          md:w-[6rem]
          lg:w-[8rem]
           xl:w-[10rem]"
            >
              Add
              <BiShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
