import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartBottom from "./CartBottom";

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext);
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10 ">
      <div className="text-font-semibold">Hello there I am the boss</div>
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 duration-300 transition-all" />
      </div>
      <div>Cart items</div>
      <CartBottom />
    </div>
  );
};

export default CartTop;
