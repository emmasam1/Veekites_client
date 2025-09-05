import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[400px] bg-[url('assets/about2.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 h-[400px] flex justify-center items-center flex-col">
       <div className="relative z-10 text-white space-y-4">
        <h2 className="text-5xl font-bold text-center">About Us</h2>
        <h3 className="text-3xl lg:text-4xl sm:text-center font-medium">
          Shaping the Future with Expertise and Innovation
        </h3>
        <p className="max-w-2xl mx-auto text-lg lg:text-base sm:text-center leading-relaxed font-medium">
          Delivering excellence across civil engineering, oil and gas, and global
          project management. Our expertise drives innovation, fuels progress,
          and builds a sustainable future.
        </p>
      </div>
      </div>
     
    </div>
  );
};

export default HeroSection;
