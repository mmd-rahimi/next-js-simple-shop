import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function ProductInfo({
  category,
  title,
  rating,
  description,
  price,
}: {
  category: string;
  title: string;
  rating?: number;
  description: string;
  price: number;
}) {
  return (
    <div className="md:w-[50%]">
      {/* rate & title*/}
      <div className="w-full flex flex-row justify-between items-start pb-4 border-b">
        <div className="flex flex-col gap-2">
          <h3 className="font-normal lg:text-xl">{category}</h3>
          <h1 className="text-lg font-medium md:text-xl lg:text-3xl xl:text-4xl">
            {title}
          </h1>
        </div>
        {rating && (
          <span className="flex flex-col items-center justify-center text-sm font-light text-yellow-400 md:text-[1rem] lg:text-lg xl:text-xl">
            <BsStarFill />
            {rating}
          </span>
        )}
      </div>

      {/* description */}
      <p className="font-normal text-sm mt-4 md:text-[1rem] lg:text-lg xl:text-xl">
        {description}
      </p>

      {/* price */}
      <div className="mt-4">
        <span className="font-medium border-b">{price} $</span>
      </div>
    </div>
  );
}