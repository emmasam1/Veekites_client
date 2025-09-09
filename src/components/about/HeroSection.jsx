import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[400px] bg-[url('assets/about2.jpg')] bg-no-repeat bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 h-[400px] flex justify-center flex-col px-4">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            About Us
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
