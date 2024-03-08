"use client";
import Modal from "react-modal";
import Image from "next/image";
import { useState } from "react";

Modal.setAppElement("body");
//style
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl ">
      <Image
        onClick={openModal}
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={1}
      ></Image>
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer ">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6 ">
        {pizza.description}
      </div>
      {/* price and button */}
      <div className="mb-6 flex items-center justify-between ">
        <div className="hidden lg:flex text-xl font-semibold ">
          start at {pizza.priceSm}
        </div>
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        {/* btn for phone */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient text-sm lg:hidden px-3"
        >
          starts at {pizza.priceSm}
        </button>
      </div>
      {/* div */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
        >
          Modal
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
