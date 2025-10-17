
import React from "react";
import brand1 from "../../assets/brand1.jpeg";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.jpeg";
import brand4 from "../../assets/brand4.jpeg";
import brand5 from "../../assets/brand5.jpeg";
import brand6 from "../../assets/brand6.jpeg";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const BrandsSection = () => {
  return (
    <div className="bg-white pt-12 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-marquee space-x-12">
          {[...brands, ...brands].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Brand logo"
              className="h-17 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
