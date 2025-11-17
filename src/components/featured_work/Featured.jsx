import React from "react";
import { useLocation } from "react-router";

const Featured = () => {
  const { state } = useLocation();
  const slide = state?.slide;

  console.log(slide);
  return (
    <div className="w-11/12 mx-auto mb-12">
        
      <div className="grid grid-cols-1 md:grid-cols-2 relative overflow-visible ">
        <div className="relative bg-[#dbe9f2] md:h-[560px] p-10 md:p-16 z-10">
          <p className="text-sm font-semibold text-[#A02B2D] mb-3">
            FEATURED WORK
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-[#0f2b36] mb-5 max-w-lg">
            {slide?.title}
          </h3>

          {/* <p className="text-sm text-[#1f4854] font-medium mb-4">
                  {slide.category}
                </p> */}

          <p className="text-base text-[#274a53] max-w-md mb-8">
            {slide?.description}
          </p>
        </div>

        <div className="relative flex flex-col overflow-visible">
          <div className="relative md:-ml-14 md:mt-12 z-20">
            <img
              src={slide?.image}
              alt={slide?.title}
              className="w-full md:h-[480px] h-[260px] object-cover block shadow-md"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
