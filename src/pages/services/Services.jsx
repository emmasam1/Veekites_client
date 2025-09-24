import React, { useState, useEffect } from "react";
import { Button, Divider } from "antd";

import {
  HomeOutlined,
  ToolOutlined,
  BuildOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { IoChevronBackSharp } from "react-icons/io5";

import image1 from "../../assets/services_renovation.jpg";
import image5 from "../../assets/service_oil.jpg";
import image6 from "../../assets/service_marine.jpg";
import image8 from "../../assets/prj_management.jpg";
import image7 from "../../assets/service_ict.jpg";
import image9 from "../../assets/service_strategic.jpg";
import image10 from "../../assets/solution.jpg";
import heroImage from "../../assets/service_bg.jpeg";
import { useLocation } from "react-router";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const location = useLocation();

    useEffect(() => {
    if (location.state?.service) {
      setSelectedService(location.state.service);
    }
  }, [location.state]);

  const services = [
    {
      id: 1,
      title: "Construction",
      description:
        "We deliver high-quality construction solutions tailored to meet client needs. From residential and commercial buildings to large-scale infrastructure, Veekites ensures every project is executed with precision, safety, and efficiency. Our experienced team combines modern technology with global best practices to deliver durable and sustainable results on time and within budget.",
      image: image1,
      icon: <ToolOutlined className="!text-white text-3xl" />,
    },
    {
      id: 2,
      title: "Oil & Gas",
      description:
        "Veekites provides world-class services across the oil and gas value chain. We support upstream, midstream, and downstream operations with expertise in exploration support, logistics, facility management, and engineering solutions. With a strong focus on safety, compliance, and environmental responsibility, we help energy companies maximize productivity while minimizing risks.",
      image: image5,
      icon: <BuildOutlined className="!text-white text-3xl" />,
    },
    {
      id: 3,
      title: "Marine Services",
      description:
        "We offer comprehensive marine solutions including vessel supply, offshore support, marine logistics, and port operations. Our marine division ensures seamless operations for oil and gas, shipping, and coastal infrastructure projects. With reliable equipment, skilled manpower, and strict adherence to international standards, Veekites guarantees safety and efficiency on every voyage.",
      image: image6,
      icon: <HomeOutlined className="!text-white text-3xl" />,
    },
    {
      id: 4,
      title: "Project Management",
      description:
        "Veekites brings structure and clarity to complex projects. Our project management team oversees planning, execution, monitoring, and delivery to ensure projects are completed on schedule and within budget. Using globally recognized methodologies, we minimize risks, optimize resources, and deliver measurable value to our clients.",
      image: image8,
      icon: <ThunderboltOutlined className="!text-white text-3xl" />,
    },
    {
      id: 5,
      title: "ICT Training & Solutions",
      description:
        "We empower businesses and individuals with cutting-edge ICT services and professional training. From digital transformation and enterprise software solutions to hands-on training in emerging technologies, Veekites provides tailored ICT strategies to boost efficiency, innovation, and competitiveness in today’s digital age.",
      image: image7,
      icon: <ToolOutlined className="!text-white text-3xl" />,
    },
    {
      id: 6,
      title: "Strategic Procurement",
      description:
        "Our procurement solutions are designed to streamline sourcing and supply chain management. Veekites leverages strong partnerships with global suppliers to provide high-quality materials, equipment, and services at competitive prices. We ensure transparency, accountability, and cost-effectiveness across every procurement process.",
      image: image9,
      icon: <BuildOutlined className="!text-white text-3xl" />,
    },
    {
      id: 7,
      title: "Customized Cross-Industry Solutions",
      description:
        "Every business has unique challenges — and Veekites is built to solve them. We design and deliver tailor-made solutions that cut across industries, from energy and construction to ICT, logistics, and beyond. By combining deep sector knowledge with innovative strategies, we help organizations achieve operational excellence and sustainable growth.",
      image: image10,
      icon: <BuildOutlined className="!text-white text-3xl" />,
    },
  ];

  const capabilities = [
    {
      title: "Detailed Engineering + Design",
      description:
        "Maximize project value with leading technologies and an agile, dedicated team.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      title: "Construction Management",
      description:
        "Delivering projects on time and within budget with proven management systems.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      title: "Owner’s Engineering",
      description:
        "Independent project oversight to safeguard client interests and ensure quality.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  return (
    <div className="mb-10">
      {/* Hero Section */}
      <div
        className="h-[500px] relative -top-21 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            selectedService ? selectedService.image : heroImage
          })`,
        }}
      >
        <div className="bg-[#0000009e] h-[500px] flex justify-center flex-col px-4">
          <div className="max-w-6xl w-full mx-auto">
            {selectedService && (
              <div
                className="flex items-center cursor-pointer w-20 gap-2 text-white mb-5"
                onClick={() => setSelectedService(null)}
              >
                <IoChevronBackSharp /> Back
              </div>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-white">
              {selectedService ? selectedService.title : "Services We Offer"}
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 mx-auto">
        {!selectedService ? (
          // 🔹 Show All Services
          services.map((service, index) => (
            <div key={service.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                {/* Left (image) */}
                <div className="h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right (content) */}
                <div className="md:col-span-2 p-4">
                  <h3 className="font-bold text-lg uppercase">{service.title}</h3>
                  <p className=" mt-4 text-justify">
                    {service.description}
                  </p>
                  <Button
                    className="!bg-[#A02B2D] !border-none !rounded-none !text-white mt-8"
                    onClick={() => {
                      setSelectedService(service);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Explore Service
                  </Button>
                </div>
              </div>

              {/* Divider (not for last item) */}
              {index !== services.length - 1 && (
                <div className="border-b border-gray-300"></div>
              )}
            </div>
          ))
        ) : (
          // 🔹 Show Selected Service Details
          <div className="py-10">
            <p className="text-justify">
              {selectedService.description}
            </p>

            <div className="mt-8">
              <h3 className="font-bold uppercase text-2xl">
                {selectedService.title} Capabilities
              </h3>

              <Divider />

              {/* Grid of Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap, idx) => (
                  <div key={idx}>
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="h-80 w-full object-cover"
                    />
                    <h3 className="font-bold text-lg uppercase mt-4">{cap.title}</h3>
                    <p className="text-justify mt-3">
                      {cap.description}
                    </p>
                    <Button
                      className="!p-0 !border-none mt-3 !shadow-none hover:!text-[#A02B2D] !text-[#A02B2D]"
                      onClick={() => {
                        setSelectedService({
                          ...selectedService,
                          image: cap.image,
                          title: cap.title,
                          description: cap.description,
                        });
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Learn more
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
