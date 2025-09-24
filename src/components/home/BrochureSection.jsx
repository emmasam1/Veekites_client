import { Link } from "react-router";
import brochureImg from "../../assets/brochure3.png";

export default function BrochureSection() {
  return (
   <section className="w-full relative px-6 md:px-12 mb-20 md:mb-10">
      {/* Blue band background (desktop only) */}
      <div className="hidden md:flex absolute inset-0 items-center">
        <div className="w-full bg-[#c9dceb] h-52"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Left text */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
            Download our Company Brochures
          </h2>
          {/* Button (mobile: placed below image, so hide here) */}
          <div className="hidden md:block">
            <Link
              to="/our-services"
              className="w-full bg-[#A02B2D] hover:bg-[#ef2b2e] text-white font-semibold px-6 py-3 transition"
            >
                download & View 
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0">
          <img
            src={brochureImg}
            alt="Digital brochures"
            className="w-full max-w-[360px] md:max-w-[340px] lg:max-w-[460px] h-auto object-contain relative z-20"
          />
        </div>

        {/* Button (mobile only, stacked at bottom) */}
        <div className="md:hidden mt-0 lg:mt-6">
          <Link
            to="/our-services"
            className="w-full bg-[#A02B2D] hover:bg-[#ef2b2e] text-white font-semibold px-6 py-3 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
