import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
export const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center">
      <div className="flex flex-row items-center gap-3 my-2">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-1.5">Delivery</p>
          <p className="p-1">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-full flex items-center px-2 w-[250px] sm:w-[400px] h-[40px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Food"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>
      {/* {card button} */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
      </button>
      {/* {Mobile menu} */}
      <div className="bg-black/80 fixed w-full h-screen z-5 top-0 left-0"></div>
    </div>
  );
};
