

import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[400px] bg-[url('assets/about2.jpg')] bg-no-repeat bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 h-[400px] flex justify-center items-center flex-col">
        <div className="relative z-10 text-white space-y-4 px-4 sm:px-6 md:px-8 lg:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">About Us</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            Shaping the Future with Expertise and Innovation
          </h3>
          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-base leading-relaxed font-medium">
            Delivering excellence across civil engineering, oil and gas, and
            global project management. Our expertise drives innovation, fuels
            progress, and builds a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
