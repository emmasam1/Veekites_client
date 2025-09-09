import React, { useState } from "react";
import accountability from "../../assets/icons/accountability-icon-2.png";
import efficiency from "../../assets/icons/efficiency-icon-2.png";
import enthusiasm from "../../assets/icons/enhtusiasm-icon-2.png";
import ingenuity from "../../assets/icons/ingenuity-icon-2.png";
import integrity from "../../assets/icons/integrity-icon-2.png";
import quality from "../../assets/icons/quality-icon-2.png";
import safety from "../../assets/icons/safety-icon.png";

const valuesData = [
  {
    title: "Safety",
    description:
      "We prioritize safety in every aspect of our operations, ensuring the well-being of employees, clients, and communities.",
    icon: safety,
    borderColor: "border-orange-500",
  },
  {
    title: "Accountability",
    description:
      "We take responsibility for our actions and deliver on our commitments with integrity and transparency.",
    icon: accountability,
    borderColor: "border-green-500",
  },
  {
    title: "Efficiency",
    description:
      "We maximize efficiency in all operations to deliver high-quality results with minimal waste of time and resources.",
    icon: efficiency,
    borderColor: "border-blue-400",
  },
  {
    title: "Enthusiasm",
    description:
      "We approach challenges with enthusiasm and passion, creating an energetic and motivating environment.",
    icon: enthusiasm,
    borderColor: "border-sky-500",
  },
  {
    title: "Ingenuity",
    description:
      "We innovate and solve problems creatively to provide unique and effective solutions.",
    icon: ingenuity,
    borderColor: "border-lime-600",
  },
  {
    title: "Integrity",
    description:
      "We act with integrity, honesty, and fairness in all relationships with clients, partners, and colleagues.",
    icon: integrity,
    borderColor: "border-indigo-800",
  },
  {
    title: "Quality",
    description:
      "We demonstrate quality through consistent value to customers and exceeding expectations.",
    icon: quality,
    borderColor: "border-gray-600",
  },
];

const CoreValues = () => {
  const [selected, setSelected] = useState(valuesData[0]);
  const [activeIndex, setActiveIndex] = useState(null);
  const outerRadius = 220; // distance from center

  return (
    <div className="w-full py-10 px-5 bg-gradient-to-b from-gray-50 to-white">
      {/* Desktop / Large Screen Grid Layout */}
      <div className="hidden md:grid grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Left Side - Heading */}
        <div className="flex flex-col justify-start">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Committed <br />
            to excellence <br />
            through <br />
            <span className="text-teal-500">our core values</span>
          </h2>
        </div>

        {/* Right Side - Circular Layout */}
        <div className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center">
          {/* Center Circle */}
          <div className="absolute w-72 h-72 rounded-full bg-white border-[12px] border-[#E5E5E5] shadow-2xl flex flex-col items-center justify-center text-center p-6 z-10">
            <h4 className="text-xl font-bold text-gray-800">{selected.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{selected.description}</p>
          </div>

          {/* Outer Circles */}
          {valuesData.map((val, i) => {
            const angle = (i / valuesData.length) * (2 * Math.PI);
            const x = outerRadius * Math.cos(angle);
            const y = outerRadius * Math.sin(angle);

            return (
              <div
                key={i}
                className="absolute flex flex-col items-center text-center"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div
                  className={`w-20 h-20 rounded-full bg-white border-4 ${val.borderColor} flex items-center justify-center shadow-md cursor-pointer`}
                  onMouseEnter={() => setSelected(val)}
                  onClick={() => setSelected(val)}
                >
                  <img
                    src={val.icon}
                    alt={val.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {val.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout - Accordion */}
      <div className="flex flex-col md:hidden w-full max-w-lg mx-auto gap-6">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Committed to excellence through
          </h2>
          <h3 className="text-3xl font-bold text-teal-500">our core values</h3>
        </div>

        {/* Accordion List */}
        <div className="w-full space-y-4">
          {valuesData.map((val, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              {/* Accordion Header */}
              <button
                className="flex items-center justify-between w-full p-4"
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full border-4 ${val.borderColor} flex items-center justify-center`}
                  >
                    <img
                      src={val.icon}
                      alt={val.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-base font-semibold text-gray-800">
                    {val.title}
                  </span>
                </div>
                <span className="text-gray-500">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Body */}
              {activeIndex === i && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {val.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
