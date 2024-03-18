import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartBottom = () => {
  const { setIsOpen, cart } = useContext(CartContext);
  return <div>CartBottom</div>;
};

export default CartBottom;
