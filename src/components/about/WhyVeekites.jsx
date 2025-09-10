import beign from "../../assets/woman-architect.jpg"; // Replace with your image

const WhyVeekites = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left: Image (hidden on mobile) */}
        <div className="hidden md:block">
          <img
            src={beign}
            alt="Veekites"
            className="w-full h-[580px] object-containe"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#A02B2D] mb-4">
            What Sets Veekites Apart
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            What distinguishes Veekites is our holistic approach to solving
            complex challenges. We bring together a diverse team of experts from
            various disciplines, ensuring that we approach each project with
            fresh perspectives and tailored solutions. Our commitment to
            sustainability, combined with our innovative technologies, allows us
            to deliver projects that not only meet today’s needs but also
            anticipate tomorrow’s challenges. We’re more than just a service
            provider — we’re a partner dedicated to your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyVeekites;
