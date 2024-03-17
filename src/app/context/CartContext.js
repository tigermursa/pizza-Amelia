"use client";
import { createContext, useState } from "react";

// cart context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust
  ) => {
    console.log(id, image, name, price, additionalTopping, size, crust);
  };
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
