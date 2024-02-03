"use client";

import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

const Pizza = ({ pizza }) => {
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl border">
      <Image
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={1}
      ></Image>
      {/* title */}
      <div>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer border">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6 border">
        {pizza.description}
      </div>
      {/* price and button */}
      <div className="mb-6 flex items-center justify-between border">
        <div className="hidden lg:flex text-xl font-semibold ">
          start at {pizza.priceSm}
        </div>
        <button className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
          Choose
        </button>
      </div>
    </div>
  );
};

export default Pizza;
