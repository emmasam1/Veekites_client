import React from "react";

const IntroSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Image */}
      <div className="relative">
        <img src="assets/excavator.jpg" alt="Excavator" className="rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            ▶
          </button>
        </div>
      </div>

      {/* Right: Text */}
      <div className="space-y-6">
        <h4 className="text-orange-600 font-semibold">Welcome to Castro</h4>
        <h2 className="text-3xl lg:text-4xl font-bold">
          50 Years of Experience in Industry
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          repudiandae odit dolorum quis laudantium impedit beatae perferendis
          natus, hic libero sed atque quisquam possimus error, voluptate est
          molestiae doloremque necessitatibus illum rerum sunt.
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 font-medium rounded hover:bg-orange-700 transition">
          OUR SERVICES
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
