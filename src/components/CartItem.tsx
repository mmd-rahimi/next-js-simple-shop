"use client";

import { useCart } from "@/context/CartContext";
import React from "react";
import { BiTrash } from "react-icons/bi";

function CartItem() {
  const { cart, RemoveFromCart } = useCart();

  return (
    <div>
      {/* cart item */}
      {cart.map((product) => (
        <div className="w-full mb-4" key={product.id}>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4 ">
              <div
                className="w-[7rem] h-[7rem] 
            md:w-[10rem] md:h-[10rem]"
              >
                <img className="w-full h-full" src={product.image} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-medium md:text-2xl">{product.title}</h1>
                <h3 className="font-light md:text-lg">{product.price} $</h3>
              </div>
            </div>
            <button
              onClick={() => RemoveFromCart(product.id)}
              className="bg-red-500 text-white h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] flex justify-center items-center cursor-pointer hover:scale-110 duration-150"
            >
              <BiTrash className="text-2xl md:text-3xl" />
            </button>
          </div>
        </div>
      ))}
      {/* cart item */}
    </div>
  );
}

export default CartItem;
