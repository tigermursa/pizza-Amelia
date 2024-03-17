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
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

    const newItems = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };
    setCart([...cart, newItems]);
  };
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
