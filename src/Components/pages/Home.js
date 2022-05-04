import React from "react";
import Banner from "../Banner";
import Products from "../Products";

import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Banner />
      <h1>https://www.shuafitness.com/</h1>;
    </div>
  );
};

export default Home;
