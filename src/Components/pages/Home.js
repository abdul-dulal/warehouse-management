import React from "react";
import Banner from "../Banner";
import Brand from "../Brand";
import MiniSlider from "../MiniSlider";
import Products from "../Products";

import Slider from "../Slider";
import Stock from "../Stock";

const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Banner />
      <Brand />
    </div>
  );
};

export default Home;
