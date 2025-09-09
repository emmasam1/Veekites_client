

import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[400px] bg-[url('assets/about2.jpg')] bg-no-repeat bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 h-[400px] flex justify-center flex-col">
        <div className="relative z-10 text-white space-y-4 px-4 sm:px-6 md:px-25 lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold">About Us</h2>
          {/* <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Shaping the Future with Expertise and Innovation
          </h3>
          <p className=" sm:text-lg lg:text-left leading-relaxed font-medium">
            Delivering excellence across civil engineering, oil and gas, and<br/>
            global project management. Our expertise drives innovation, fuels<br/>  
            progress, and builds a sustainable future.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
