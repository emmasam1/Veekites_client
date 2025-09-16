
import React from "react";
import { Eye, Target, Gem } from "lucide-react";

export default function VisionMissionValues() {
  const items = [
    {
      Icon: Eye,
      title: "VISION",
      desc:
        "Our vision is to become a global leader in engineering, architecture, and technical solutions by embracing innovation and sustainability.",
    },
    {
      Icon: Target,
      title: "MISSION",
      desc:
        "Our mission is to be the most foremost Architectural Design, Civil, Mechanical, Electrical, Building Engineering, General Supply as well as Technical company of the millennium",
    },
    {
      Icon: Gem,
      title: "VALUES",
      desc:
        "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    },
  ];

  return (
    <section className="w-full bg-[#dbe7ee] py-12 px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* flex container that becomes 3 columns on md */}
        <div className="flex flex-col md:flex-row items-stretch text-center">
          {items.map(({ Icon, title, desc }, idx) => (
            <div
              key={title}
              className="flex-1 px-6 md:px-10 py-8 flex flex-col items-center justify-start"
            >
              {/* circular icon holder */}
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#e9f2f8] flex items-center justify-center">
                  <Icon className="w-10 h-10 text-[#1f4f78]" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#0b3550] mb-3">
                {title}
              </h3>
              <p className="max-w-[30ch] text-sm md:text-base text-[#425e73]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vertical separators (only visible on md+) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-y-0 left-1/3 w-px bg-white"
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-y-0 left-2/3 w-px bg-white"
        />
      </div>
    </section>
  );
}
