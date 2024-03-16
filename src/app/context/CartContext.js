import { createContext } from "react";

// cart context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={"cart context"}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
