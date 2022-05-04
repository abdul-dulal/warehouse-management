import React from "react";
import banner from "../assets/img/banner.png";
const Banner = () => {
  return (
    <div className=" container mx-auto grid grid-cols-2 gap-5 my-16">
      <div>
        <img src={banner} className="rounded-md" alt="" />
      </div>
      <div className="h-full mt-16  ml-16">
        <h1 className="text-3xl font-bold text-white">Stylish Spinning Bike</h1>
        <p className="text-xl my-3 text-[#9CA3AF]">
          Ride a spinning bike, release your stress, and enjoy the fun.
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Cyan to blue
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
