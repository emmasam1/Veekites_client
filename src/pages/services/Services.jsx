import React, { useState, useEffect, useMemo } from "react";
import { Button, Divider } from "antd";
import {
  HomeOutlined,
  ToolOutlined,
  BuildOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { IoChevronBackSharp } from "react-icons/io5";
import { useLocation } from "react-router";

import image1 from "../../assets/construction_service.jpg";
import image5 from "../../assets/service_oil.jpg";
import image6 from "../../assets/marin_service.jpg";
import image8 from "../../assets/prj_management.jpg";
import image7 from "../../assets/Blue Minimalist Project Presentation.png";
import image9 from "../../assets/strat_proc.jpg";
import image10 from "../../assets/customized.jpg";
import heroImage from "../../assets/service_bg.jpeg";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [parentService, setParentService] = useState(null); // ✅ keeps track of the main category
  const location = useLocation();

  // ✅ Load state from router navigation
  useEffect(() => {
    if (location.state?.service) {
      setSelectedService(location.state.service);
      setParentService(location.state.service.title);
    }
  }, [location.state]);


  const defaultText = `Every business encounters unique challenges, and Veekites is here to help address them. We develop and implement customized solutions tailored to various industries, including energy, civil engineering, oil and gas, marine logistics, and project management.

By combining our extensive industry knowledge with innovative strategies, we support organizations in achieving operational excellence, sustainable solutions, and growth.`

  // ✅ All Services
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

  // // ✅ Default Capabilities
  // const defaultCapabilities = [
  //   {
  //     title: "Detailed Engineering + Design",
  //     description:
  //       "Maximize project value with leading technologies and an agile, dedicated team.",
  //     image:
  //       "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
  //   },
  //   {
  //     title: "Construction Management",
  //     description:
  //       "Delivering projects on time and within budget with proven management systems.",
  //     image:
  //       "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
  //   },
  //   {
  //     title: "Owner’s Engineering",
  //     description:
  //       "Independent project oversight to safeguard client interests and ensure quality.",
  //     image:
  //       "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
  //   },
  // ];

  // ✅ Construction Capabilities
  const ConstructionCapability = [
    {
      id: 1,
      title: "End-to-End Project Delivery",
      text: "Veekites Global offers comprehensive construction solutions from concept and design to execution and maintenance. Our team ensures that every project is delivered on schedule, within budget, and in compliance with international safety and quality standards.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: "Civil, Marine & Industrial Construction Expertise",
      text: "We specialize in civil, structural, and marine construction, including port facilities, warehouses, bridges, jetties, industrial plants, and urban infrastructure. Our technical capacity allows us to execute both onshore and offshore construction projects efficiently.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Sustainable and Technology-Driven Construction",
      text: "Veekites Global integrates modern technology and sustainable practices into every project. Through smart engineering tools, quality materials, and environmentally responsible designs, we deliver infrastructure that stands the test of time while minimizing ecological impact.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  // ✅ Oil & Gas Capabilities
  const OilCapability = [
    {
      id: 1,
      title: "Onshore and Offshore Support Services",
      text: "Veekites Global provides comprehensive support solutions for oil and gas operations including logistics coordination, equipment supply, marine transportation, and technical manpower. Our integrated approach ensures seamless connection between onshore facilities and offshore installations.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: "Engineering, Procurement & Construction (EPC) Services",
      text: "We deliver fit-for-purpose EPC solutions for oil and gas infrastructure projects, from pipeline construction and facility upgrades to storage terminals and jetty developments. Every project is executed with a focus on safety, quality, and operational efficiency.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Asset Integrity & Environmental Management",
      text: "Through inspection, maintenance, and environmental compliance systems, Veekites Global helps clients extend asset lifespan, minimize downtime, and meet regulatory standards. Our goal is to enhance performance while promoting safe and sustainable energy operations.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  const MarineCapability = [
    {
      id: 1,
      title: "Comprehensive Marine Operations Support",
      text: "Veekites Global provides a wide range of marine logistics and operational support services, including vessel chartering, crew transfer, cargo handling, and offshore supply operations. Our goal is to ensure safe, efficient, and timely movement of people, materials, and equipment across marine environments.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: "Port & Terminal Management Solutions",
      text: "We offer specialized services in port operations, terminal management, and jetty maintenance, helping clients achieve operational efficiency and compliance with international maritime standards. Our expertise extends to dredging, berthing assistance, and coordination of vessel traffic within port facilities.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Marine Engineering & Maintenance Services",
      text: "Veekites Global provides technical and engineering solutions for the maintenance, inspection, and repair of marine assets. From hull cleaning to jetty rehabilitation and mooring systems, we ensure vessels and facilities remain in optimal condition for safe and continuous operations.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  const ProjectCapability = [
    {
      id: 1,
      title: "Strategic Planning and Execution",
      text: "Veekites Global delivers end-to-end project management services, ensuring every project is strategically planned, efficiently executed, and aligned with client objectives. Our teams apply structured methodologies to manage scope, time, cost, and quality effectively.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: "Multidisciplinary Coordination and Oversight",
      text: "We specialize in coordinating complex, cross-industry projects, bringing together engineers, contractors, regulators, and stakeholders under a unified management framework. This approach guarantees seamless communication, risk control, and accountability across all project phases.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Quality, Safety, and Performance Assurance",
      text: "Through rigorous quality assurance systems and safety protocols, Veekites Global maintains the highest standards of project delivery. We leverage data-driven monitoring and performance tracking tools to ensure each milestone meets international best practices and client satisfaction.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  const IctCapability = [
    {
      id: 1,
      title: "Digital Infrastructure and Systems Integration",
      text: "Veekites Global provides robust ICT infrastructure and systems integration services that enable businesses to operate seamlessly. From network design and data center setup to cloud-based solutions, we help clients build secure, scalable, and high performing digital environments.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: "Smart Technology and Process Automation",
      text: "We deploy smart technology solutions that enhance operational efficiency across industries including logistics tracking, asset monitoring, and process automation. Our focus is on improving decision-making through real-time data, analytics, and digital transformation tools.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Quality, Safety, and Performance Assurance",
      text: "Through rigorous quality assurance systems and safety protocols, Veekites Global maintains the highest standards of project delivery. We leverage data-driven monitoring and performance tracking tools to ensure each milestone meets international best practices and client satisfaction.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  const ProcurementCapability = [
    {
      id: 1,
      title: "End-to-End Procurement Solutions",
      text: "Veekites Global delivers comprehensive procurement services covering sourcing, supplier evaluation, contract management, and logistics coordination. We ensure that every purchase aligns with project goals, budget expectations, and delivery timelines.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: "Strategic Sourcing and Vendor Management",
      text: "We adopt a data-driven and relationship-based approach to sourcing, engaging reliable local and international vendors to guarantee quality, cost efficiency, and sustainability. Our vendor management systems promote transparency, accountability, and long-term partnerships.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Supply Chain Optimization and Cost Efficiency",
      text: "Through strategic planning and digital tools, Veekites Global enhances supply chain visibility and reduces lead time. Our procurement model focuses on value creation  delivering the right materials, at the right time, and at the best total cost of ownership.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  const CustomizedCapability = [
    {
      id: 1,
      title: "Integrated Infrastructure & Logistics Systems",
      text: "Veekites Global delivers tailored infrastructure and logistics solutions that connect multiple industries from marine and oil & gas to construction and technology. By integrating civil works, engineering, and digital logistics, we optimize supply chains, enhance mobility, and drive operational excellence across diverse environments.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/fbb645fab9d13b81da4f04eba73d9586-1.jpg.webp",
    },
    {
      id: 2,
      title: " Engineering, Energy & Environmental Synergy",
      text: "Our cross-industry expertise allows us to merge engineering innovation with sustainable energy and environmental practices. We develop adaptable project models that serve ports, industrial zones, and offshore facilities  ensuring efficiency, reduced downtime, and compliance with global ESG standards.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/02/9d0295eb325f826726d41ddf68193976-1-1.jpg.webp",
    },
    {
      id: 3,
      title: "Technology-Enabled Business Transformation",
      text: "Through digital transformation and smart technology adoption, Veekites Global supports clients in modernizing operations, improving data visibility, and automating complex workflows. Our customized ICT solutions bridge sectors  enabling better decision-making, cost efficiency, and long-term growth.",
      image:
        "https://auduboncompanies.com/wp-content/smush-webp/2021/04/Owners-Engineering2.jpg.webp",
    },
  ];

  // ✅ Capability selector uses parentService (not current title)
  const activeCapabilities = useMemo(() => {
    const baseTitle = (
      parentService ||
      selectedService?.title ||
      ""
    ).toLowerCase();
    if (baseTitle.includes("construction")) return ConstructionCapability;
    if (baseTitle.includes("oil")) return OilCapability;
    if (baseTitle.includes("marine")) return MarineCapability;
    if (baseTitle.includes("project")) return ProjectCapability;
    if (baseTitle.includes("ict")) return IctCapability;
    if (baseTitle.includes("procurement")) return ProcurementCapability;
    if (baseTitle.includes("customized")) return CustomizedCapability;
    return [];
  }, [parentService, selectedService]);

  return (
    <div className="mb-10 -top-21 relative">
      {/* ✅ Hero Section */}
      <div
        className="h-[500px] relative bg-no-repeat bg-cover bg-center"
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
                onClick={() => {
                  if (
                    parentService &&
                    selectedService.title !== parentService
                  ) {
                    // Go back to the parent service view
                    const parent = services.find(
                      (s) => s.title === parentService
                    );
                    setSelectedService(parent);
                  } else {
                    setSelectedService(null);
                    setParentService(null);
                  }
                }}
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

      {/* ✅ Main Content */}
      <div className="w-11/12 mx-auto">
        {!selectedService ? (
          services.map((service, index) => (
            <div key={service.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                <div className="h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="md:col-span-2 p-4">
                  <h3 className="font-bold text-lg uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-justify">{service.description}</p>
                  <Button
                    className="!bg-[#A02B2D] !border-none !rounded-none !text-white mt-8"
                    onClick={() => {
                      setSelectedService(service);
                      setParentService(service.title);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Explore Service
                  </Button>
                </div>
              </div>

              {index !== services.length - 1 && (
                <Divider className="!my-0 !border-gray-300" />
              )}
            </div>
          ))
        ) : (
          <div className="py-10">
            <p className="text-justify">{selectedService.description}</p>

            <div className="mt-8">
              <h3 className="font-bold uppercase text-2xl mb-4">
                {parentService || selectedService.title} Capabilities
              </h3>
              <Divider />

              {activeCapabilities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeCapabilities.map((cap) => (
                    <div key={cap.id} className="bg-white">
                      {cap.image && (
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="h-60 w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="py-4">
                        <h3 className="font-bold text-lg text-gray-800 uppercase mb-3">
                          {cap.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-justify">
                          {cap.text}
                        </p>

                        <Button
                          type="link"
                          className="!p-0 !text-[#A02B2D] hover:!text-[#7e1f20]"
                          onClick={() => {
                            setSelectedService({
                              ...selectedService,
                              image: cap.image,
                              title: cap.title,
                              description: cap.text,
                            });
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Learn more →
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center">
                  Capability details coming soon.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
