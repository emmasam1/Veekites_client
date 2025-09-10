import experience2 from "../../assets/experience2.jpg";
import experience1 from "../../assets/experience1.jpg";
import { Button } from "antd";
import { Link } from "react-router";

const ExperienceSection = () => {
  return (
    <div className="w-11/12 mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column */}
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
          <span className="text-[#A02B2D]">12</span> Years of Experience
        </h2>
        <p className="text-sm text-gray-500 italic">
          Founded on June 11th, 2013 — Over a Decade of Excellence
        </p>
        <p className="text-gray-600 leading-relaxed text-justify">
          Since our incorporation on June 11th, 2013, Veekites Global Services Limited
          has consistently delivered innovative solutions across engineering,
          construction, oil & gas, and project management. In just over a decade,
          we have transformed from a growing firm into a trusted industry leader with
          a proven record of excellence.
        </p>
        <p className="text-gray-600 leading-relaxed text-justify">
          Our 12 years of experience highlight a journey of resilience, innovation,
          and client-focused service. Each project we deliver combines cutting-edge
          technology with sustainable practices, ensuring long-term value and
          meaningful impact for our clients and communities.
        </p>
        <img
          src={experience1}
          alt="Experience"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <img
          src={experience2}
          alt="Bridge Construction"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
        <p className="text-gray-600 leading-relaxed text-justify">
          Over the years, Veekites has successfully executed landmark projects for
          governments, private institutions, and global organizations. Our diverse
          team of professionals continues to push boundaries, offering tailored
          solutions that address complex challenges while maintaining uncompromising
          quality.
        </p>
        <p className="text-gray-600 leading-relaxed text-justify">
          With 12 years of proven expertise, Veekites Global stands as a symbol of
          excellence, precision, and trust. We remain committed to advancing our
          legacy—delivering projects that not only meet today’s demands but also
          anticipate the opportunities of tomorrow.
        </p>
        <Button className="!bg-[#A02B2D] !text-white !rounded-none !border-0">
          <Link to="/contact-us">CONTACT US</Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceSection;
