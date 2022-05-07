import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/img/G699-1.jpg";
import img2 from "../assets/img/T5100-1.jpg";
import img3 from "../assets/img/T901Z-1.jpg";
import img4 from "../assets/img/KINOMAP-and-shua-treadmill-1.jpg.png";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <div className="">
          <img src={img4} alt="" className="   " />
        </div>
        <div className="relative bg-[rgba(0,0,0,.3)] text-white">
          <img src={img1} className="opacity-40	" alt="" />
          <div className="absolute bottom-96 left-52 ">
            <p className="text-xl">
              Maximize your space to reach fitness goals
            </p>
            <h1 className="text-4xl font-bold  ">Tone Your Muscle</h1>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,.3)] text-white">
          <img src={img2} alt="" className="opacity-40" />
          <div className="absolute bottom-96 left-52">
            <p className="text-xl">
              Different from traditional treadmill, offering <br /> a brand new
              experience
            </p>
            <h2 className="text-4xl font-bold  ">SHUA Curved Treadmill</h2>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,.3)] text-white">
          <img src={img3} alt="" className="opacity-40" />

          <div className="absolute bottom-96 left-52">
            <p className="text-xl text-white">
              Different from traditional treadmill, offering <br /> a brand new
              experience
            </p>
            <h2 className="text-4xl font-bold  ">SHUA Curved Treadmill</h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
