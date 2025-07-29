"use client";
import CartProvider from "@/context/CartContext";
import Header from "../Header";
import { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
};

function Layout({ children }: TLayoutProps) {
  return (
    <CartProvider>
        <Header />
        {children}
    </CartProvider>
  );
}

export default Layout;
