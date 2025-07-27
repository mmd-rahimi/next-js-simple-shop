"use client";

import { TProductType } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface ICartContext {
  AddToCart: (Product: TProductType) => void;
  RemoveFromCart: (productId: number) => void;
  PlusBtn: (productId: number) => void;
  MinusBtn: (productId: number) => void;
  cart: (TProductType & { quantity: number })[];
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

// context hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

function CartProvider({ children }: { children: ReactNode }) {
  // cart state
  const [cart, setCart] = useState<(TProductType & { quantity: number })[]>([]);

  const PlusBtn = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const MinusBtn = (productId: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const AddToCart = (product: TProductType) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const RemoveFromCart = (productId: number) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        AddToCart,
        RemoveFromCart,
        cart,
        PlusBtn,
        MinusBtn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
