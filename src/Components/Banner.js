import React from "react";
import banner from "../assets/img/banner.png";
const Banner = () => {
  return (
    <div className=" container mx-auto grid  grid-cols-1 sm:grid-cols-2 gap-5 my-16 ">
      <div>
        <img src={banner} className="rounded-md" alt="" />
      </div>
      <div className="h-full sm:mt-0 mt-16  ml-16">
        <h1 className="text-3xl font-bold text-white">Stylish Spinning Bike</h1>
        <p className="text-xl my-3 text-[#9CA3AF]">
          Ride a spinning bike, release your stress, and enjoy the fun.
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 ">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md ">
            Read More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
