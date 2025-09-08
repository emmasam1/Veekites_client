import { Button } from "antd";
import escavator from "../../assets/escavator.jpg";
import { Link } from "react-router";

const IntroSection = () => {
  return (
    <div className="w-9/11 mx-auto py-16 px-6">
      {/* Welcome Line on top */}
      {/* <h4 className="text-[#A02B2D] font-bold text-4xl lg:text-center mb-10">
        Welcome to Veekites Global Service Limited
      </h4> */}

      {/* Content: Image + Text */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative">
          <img
            src={escavator}
            alt="Excavator"
            className="rounded-lg w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Committed to Innovation, Quality,& Global Impact
          </h2>
          <p className="text-gray-600">
            Veekites Global Services Limited is widely recognized as one of the
            most professional companies offering a wide range of services in the
            fields of engineering, construction, supplies, and training, with a
            team of directors and senior executives who are experts in their
            chosen fields. Each member of this formidable team offers a range of
            combined experience in their areas of specialty.
          </p>
          <Button className="!bg-[#A02B2D] !text-white !border-none !rounded-none hover:bg-orange-700 transition cursor-pointer">
            <Link to="/our-services">OUR SERVICES</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
