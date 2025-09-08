import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router";
import {
  HomeOutlined,
  ToolOutlined,
  BuildOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import image1 from "../../assets/services_renovation.jpg";
import image2 from "../../assets/service_power.jpg";
import image3 from "../../assets/service_minning.jpg";
import image4 from "../../assets/service_material.jpg";
import image5 from "../../assets/service_oil.jpg";
import image6 from "../../assets/service_marine.jpg";
import image7 from "../../assets/service_ict.jpg";
import image8 from "../../assets/project.jpg";
import image9 from "../../assets/service_strategic.jpg";
import image10 from "../../assets/solution.jpg";


const { Meta } = Card;

function Services() {
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
  return (
    <div className="mb-10">
      <div className=" h-[500px] relative -top-21 bg-[url(/src/assets/service_hero.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="bg-[#0000009e] h-[500px] flex justify-center items-center flex-col">
        <h2 className="text-5xl font-bold text-center text-white">Our Services, Your Success</h2>
        <p className="mt-2 text-lg text-white text-center">
          Delivering innovative solutions across construction, energy, ICT, and more to help businesses grow and thrive.
        </p>
      </div>
      </div>

      <div className="w-9/11 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              hoverable
              cover={
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 h-15 w-15 bg-[#A02B2D] p-2 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              }
              className="shadow-md !rounded-none"
            >
              <Meta
                title={
                  <h3 className="font-bold text-lg mt-5">{service.title}</h3>
                }
                description={
                  <p className="text-gray-500">{service.description?.slice(0, 100)}...</p>
                }
              />
              <Button type="primary" className="!bg-[#A02B2D] !rounded-none mt-4">
                <Link
                  to={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${service.id}`}
                  state={{
                    id: service.id,
                    title: service.title,
                    description: service.description,
                    image: service.image,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
