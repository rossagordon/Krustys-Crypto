import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 m-w-[1240px] mx-auto px-4 bg-[#00957C] text-[#FDFCC4]">
      <h1 className="w-full text-3xl font-bold">Krusty's Crypto</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-black bg-[#00957C] text-[#FDFCC4] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">Krusty's Crypto</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b">Home</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;