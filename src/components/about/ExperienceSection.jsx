

import experience2 from "../../assets/experience2.jpg";
import experience1 from "../../assets/experience1.jpg";

const ExperienceSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-600">12</span> Years of Experience
        </h2>
        <p className="text-sm text-gray-500 italic">
          Founded on June 11th, 2013 — Over a Decade of Excellence
        </p>
        <p className="text-gray-600 leading-relaxed">
          Since our incorporation on June 11th, 2013, Veekites Global Services Limited has
          consistently delivered innovative solutions across engineering, construction, oil & gas,
          and project management. In just over a decade, we have transformed from a growing firm
          into a trusted industry leader with a proven record of excellence. 
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our 12 years of experience highlight a journey of resilience, innovation, and client-focused
          service. Each project we deliver combines cutting-edge technology with sustainable practices,
          ensuring long-term value and meaningful impact for our clients and communities.
        </p>
        <img src={experience1} alt="Experience" className="rounded-lg shadow-md" />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <img src={experience2} alt="Bridge Construction" className="rounded-lg shadow-md" />
        <p className="text-gray-600 leading-relaxed">
          Over the years, Veekites has successfully executed landmark projects for governments,
          private institutions, and global organizations. Our diverse team of professionals
          continues to push boundaries, offering tailored solutions that address complex challenges
          while maintaining uncompromising quality.
        </p>
        <p className="text-gray-600 leading-relaxed">
          With 12 years of proven expertise, Veekites Global stands as a symbol of excellence,
          precision, and trust. We remain committed to advancing our legacy—delivering projects
          that not only meet today’s demands but also anticipate the opportunities of tomorrow.
        </p>
        <button className="bg-[#A02B2D] text-white px-6 py-3 font-medium rounded-lg shadow hover:bg-orange-700 transition cursor-pointer">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
