"use client"
import { TProductType } from '@/types/types';
import React, { createContext, ReactNode, useState } from 'react'

interface ICartContext {
AddToCart: (Product: TProductType) => void,
RemoveFromCart: (productId: number) => void,
cart: TProductType[]
}

const CartContext = createContext<ICartContext | undefined>(undefined)

function CartProvider({children}: {children: ReactNode}) {

    const [cart, setCart] = useState<TProductType[]>([]);

    const AddToCart = (product: TProductType) => {
        setCart((prev) => [...prev, product])
    }

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