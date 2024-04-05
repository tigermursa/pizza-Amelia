"use client";

import { useContext } from "react";

import CartTop from "./CartTop";
import { CartContext } from "../context/CartContext";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";

const CartMobile = () => {
  const { cart, isOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full left-0 z-20 transition-all duration-300  flex flex-col lg:hidden`}
    >
      <CartTop />
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8  overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length >= 3
            ? "scrollbar-track-black/10"
            : "scrollbar-track-transparent"
        }`}
      >
        {cart?.map((pizza, index) => {
          return <CartItem key={index} pizza={pizza} />;
        })}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartMobile;
