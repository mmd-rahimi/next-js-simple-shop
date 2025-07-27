"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { PiMinus, PiPlus } from "react-icons/pi";

function CartItem() {
  const { cart, RemoveFromCart, AddToCart, MinusBtn, PlusBtn } = useCart();

  return (
    <div>
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
              {/* title & price & quantity */}
              <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="font-medium md:text-2xl">{product.title}</h1>
                <h3 className="font-light md:text-lg">{product.price} $</h3>
                <div className="flex flex-row items-center gap-1 md:gap-2">
                  <button onClick={() => PlusBtn(product.id)} className="bg-blue-500 rounded text-white h-[1.2rem] w-[1.2rem] md:h-[2rem] md:w-[2rem] flex justify-center items-center cursor-pointer hover:bg-blue-600 duration-100 text-xs md:text-lg md:font-semibold">
                    <PiPlus />
                  </button>
                  <p className="md:text-xl font-medium">{product.quantity}</p>
                  <button onClick={() => MinusBtn(product.id)} className="bg-blue-500 rounded text-white h-[1.2rem] w-[1.2rem] md:h-[2rem] md:w-[2rem] flex justify-center items-center cursor-pointer hover:bg-blue-600 duration-100 text-xs md:text-lg md:font-semibold">
                    <PiMinus />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link href={`/${product.id}`}
                onClick={() => AddToCart(product)}
                className="bg-blue-500  rounded text-white h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] flex justify-center items-center cursor-pointer hover:scale-110 duration-150"
              >
                <FiShoppingBag className="text-xl md:text-3xl" />
              </Link>
              <button
                onClick={() => RemoveFromCart(product.id)}
                className="bg-red-500 rounded text-white h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] flex justify-center items-center cursor-pointer hover:scale-110 duration-150"
              >
                <BiTrash className="text-2xl md:text-3xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
