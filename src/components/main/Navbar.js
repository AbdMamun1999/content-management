import React, { useState } from "react";
import { Link } from "react-router-dom";
import {TbMenu2} from "react-icons/tb"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

 
  return (
    <nav className="px-2 bg-white py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
         
          <span className="self-center text-xl font-bold whitespace-nowra font-[montserrat]">
            Flowbite
          </span>
        </Link>
        <button
          onClick={() => setToggle(!toggle)}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <TbMenu2 size={25}/>
        </button>
        <div
          className={`${
            toggle ? "visible" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 font-[montserrat] font-bold hover:text-[#9932cc] duration-300 ease-in-out"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 font-[montserrat] font-bold hover:text-[#9932cc] duration-300 ease-in-out"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 font-[montserrat] font-bold hover:text-[#9932cc] duration-300 ease-in-out"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 font-[montserrat] font-bold hover:text-[#9932cc] duration-300 ease-in-out"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 font-[montserrat] font-bold hover:text-[#9932cc] duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
