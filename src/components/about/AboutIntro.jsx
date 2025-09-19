import React from "react";
import { Link } from "react-router";

const AboutIntro = () => {
  return (
    <div className="w-full py-10 bg-[#0B2439] text-white">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center text-sm md:text-base">
          <div className="space-x-2">
            <Link
              to="/"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/our-services"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              Services
            </Link>
          </div>
          <Link
            to="/contact-us"
            className="text-white bg-[#A02B2D] px-4 py-2 font-semibold"
          >
            Contact Us
          </Link>
        </header>

        {/* Content */}
        <div className="py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-5">
            Engineering a future built on excellence
          </h1>
          <p className="mt-6 text-gray-200 text-base  max-w-3xl">
          Veekites offers integrated Engineering, Procurement, and Construction
           (EPC) services with exceptional flexibility and expertise. With
            a proven track record, we create sustainable turnkey solutions for
             global industrial operators.
          </p>
          <p className="mt-4 text-gray-200 text-base max-w-3xl">
           Through innovation and agile problem-solving, we tackle complex
            challenges and achieve project success while ensuring efficiency, 
            quality, and trust in every solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
