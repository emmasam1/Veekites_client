

import React from "react";
import { Star, Award, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Star className="w-10 h-10 text-[#A02B2D]" />,
    title: "Top Rated",
    desc: "Recognized for excellence through consistent delivery of reliable, professional, and world-class services across various industries."
  },
  {
    icon: <Award className="w-10 h-10 text-[#A02B2D]" />,
    title: "Best Quality",
    desc: "Committed to international standards,  we ensure that every project meets the highest benchmarks for safety, durability, and performance."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-[#A02B2D]" />,
    title: "Low Cost",
    desc: "We provide cost-effective solutions without compromising on quality,    offering clients maximum value for their investment."
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center space-y-4">
            {f.icon}
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
