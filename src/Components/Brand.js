import React from "react";
import img from "../../src/assets/img/Brand-meaning.png";
const Brand = () => {
  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-white">Brand meaning</h2>
        <p className="text-[#969DA9] text-xl">Why is it called "Shuhua"</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="leading-8 text-xl mt-14	text-[#969DA9]">
            SHUA means vitality and health. It expresses the desire of offering
            professional fitess equipment and idea of bring health and happinss.
            The four letters, S-H-U-A, show our strength of specialization,
            health, utility and advancement. And the logo with running imag
            conveys a concept: we are always runing, never stop.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Brand;
