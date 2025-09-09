import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[400px] bg-[url('assets/about2.jpg')] bg-no-repeat bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 h-[400px] flex justify-center flex-col">
        <div className="relative z-10 text-white space-y-4 px-4 sm:px-6 md:px-11 lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold">About Us</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
