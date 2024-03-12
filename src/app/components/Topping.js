import Image from "next/image";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        alt=""
        width={70}
        height={70}
        className="mb-2"
      />
      <div className="text-sm capitalize text-center  font-medium">
        {topping.name}
      </div>
      <input typeof="checkbox" checked={isChecked} />
      <div className={`${isChecked ? "opacity-100" : "opacity-0"}`}>
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Topping;
