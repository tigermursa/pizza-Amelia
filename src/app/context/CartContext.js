"use client";
import { createContext, useState } from "react";

// cart context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider value={(isOpen, setIsOpen)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
