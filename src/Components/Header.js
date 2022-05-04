import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-mdfixed top-0 left-0 w-full ">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Designer
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <li>
              <Link to="/home" className="text-xl ml-4">
                home
              </Link>
            </li>
            <li>
              <Link to="/inventory" className="text-xl ml-4">
                ManageInventory
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-xl ml-4">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-xl ml-4">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
