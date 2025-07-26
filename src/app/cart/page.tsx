"use client";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="flex flex-col gap-2 px-4">
      {cart.length == 0 ? <p className="text-xl text-center font-medium center">cart is empty</p> : <CartItem />}
    </div>
  );
}

export default Cart;
