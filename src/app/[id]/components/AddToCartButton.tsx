"use client";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useCart } from "@/context/CartContext";
import { TProductType } from "@/types/types";

export default function AddToCartButton({
  product,
}: {
  product: TProductType;
}) {
  const { AddToCart } = useCart();

  return (
    <div className="mt-4">
      <button
        onClick={() => AddToCart(product)}
        className="flex flex-row justify-center items-center bg-black text-white p-2 rounded-2xl gap-1 font-medium hover:bg-gray-700 cursor-pointer duration-200 w-[5rem] md:w-[6rem] lg:w-[8rem] xl:w-[10rem]"
      >
        Add
        <BiShoppingBag />
      </button>
    </div>
  );
}