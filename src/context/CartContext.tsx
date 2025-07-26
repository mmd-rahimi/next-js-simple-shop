"use client"

import { TProductType } from '@/types/types';
import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface ICartContext {
AddToCart: (Product: TProductType) => void,
RemoveFromCart: (productId: number) => void,
cart: TProductType[]
}

export const CartContext = createContext<ICartContext | undefined>(undefined)

// context hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

function CartProvider({children}: {children: ReactNode}) {

    const [cart, setCart] = useState<TProductType[]>([]);

const AddToCart = (product: TProductType) => {
  setCart((prev) => {
    if (prev.some((item) => item.id === product.id)) {
      return prev;
    }
    return [...prev, product];
  });
};

    const RemoveFromCart = (productId: number) => {
        setCart((prev) => prev.filter((product) => product.id != productId))
    }


  return (
    <CartContext.Provider value={{AddToCart, RemoveFromCart, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider