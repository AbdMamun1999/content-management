import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  RiPieChartFill,
  RiStackFill,
  RiDeleteBin7Fill,
  RiMenu2Fill,
} from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const DashboardNav = () => {
  const [width, setWidth] = useState(false);
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <nav className="px-2 py-2 bg-[#34495e] border-gray-200  border border-r-0 border-l-0">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-row gap-x-2">
            {/* Button */}
            <button
              onClick={() => setWidth(!width)}
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="hidden md:block items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => setToggle(!toggle)}
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="block md:hidden items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              {toggle ? <FaTimes />: <RiMenu2Fill /> }
            </button>
            {/* Button */}
            <Link to={"/"} className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </Link>
          </div>
        </div>
      </nav>
      {/*side bar Manu */}
      <div className="flex flex-row ">
        <div
          className={`${width ? "w-20" : " w-80"} h-[100vh] ${
            toggle ? "block" : "hidden"
          } block border-r bg-[#34495e] `}
          id="navbar-dropdown"
        >
          <ul className=" flex flex-col p-4 gap-y-2">
            <li>
              <Link to="/dashboard" className="text-white">
                <div className="py-2 px-2 flex flex-row items-center gap-x-2 bg-transparent  hover:bg-black rounded-md ease-in-out duration-150">
                  <span>
                    <RiPieChartFill size={25} />
                  </span>
                  <span
                    className={`${
                      width ? "hidden" : "visible"
                    } text-[18px] font-normal duration-700 ease-out`}
                  >
                    Dashboard
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/contents"}
                className="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <div className="py-2 px-2 flex flex-row items-center gap-x-2 bg-transparent  hover:bg-black rounded-md ease-in-out duration-150">
                  <span>
                    <RiStackFill size={25} />
                  </span>
                  <span
                    className={`${
                      width ? "hidden" : "visible"
                    } text-[18px] font-normal`}
                  >
                    Contents
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/add-content"}
                className="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <div className="py-2 px-2 flex flex-row justify-center md:justify-start items-center gap-x-2 bg-transparent  hover:bg-black rounded-md ease-in-out duration-150">
                  <span>
                    <RiDeleteBin7Fill size={25} />
                  </span>
                  <span
                    className={`${
                      width ? "hidden" : "visible"
                    } text-[18px] font-normal`}
                  >
                    Add Content
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {  <Outlet />}
      </div>
    </div>
  );
};

export default DashboardNav;
