import vision from "../../assets/vision.jpg";

const Vision = () => {
  return (
    <div className="relative bg-fixed bg-center bg-cover">
      {/* Content */}
      <div className="relative max-w-6xl mx-auto py-20 px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image preview */}
        <div className="hidden md:block">
          <img
            src={vision}
            alt="Vision"
            className="rounded-xl shadow-lg w-full h-80 object-cover border-4 border-white/20"
          />
        </div>

        {/* Right: Vision Text */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug text-center sm:text-left text-[#e62a2d]">
            Our Vision
          </h2>
          <p className="leading-relaxed text-gray-800 text-base sm:text-lg md:text-xl">
            Our vision is to become a global leader in engineering,
            architecture, and technical solutions by embracing innovation and
            sustainability. We aspire to build infrastructures and systems that
            not only serve today but also inspire generations to come.
          </p>
          <p className="leading-relaxed text-gray-700 text-sm sm:text-base md:text-lg">
            By combining creativity, integrity, and expertise, we aim to shape a
            future where quality and trust define every project we deliver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
