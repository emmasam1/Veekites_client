import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
import { FaHandshake, FaRocket } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from "antd";
import { Link } from "react-router";

import image1 from "../../assets/service-2.jpg";
import image2 from "../../assets/service1.jpg";
import Testimony from "../../components/testimony/Testimony";
import Map from "../../components/map/Map";
import ProjectCarousel from "../../components/home/ProjectCarousel";
import BrochureSection from "../../components/home/BrochureSection";

const { Meta } = Card;

const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3500,
};

// ✅ Custom hook to detect if element is in view
const useIntersection = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // only trigger once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
};

const Home = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useIntersection({ threshold: 0.1 });
  const [ref2, inView2] = useIntersection({ threshold: 0.1 });
  const [ref3, inView3] = useIntersection({ threshold: 0.1 });

  useEffect(() => {
    if (inView1) controls1.start("visible");
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) controls2.start("visible");
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) controls3.start("visible");
  }, [controls3, inView3]);

  const fadeInTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const slides = [
    {
      title: "Veekites Global Services Limited",
      text: "is widely recognized as one of the most professional companies offering a wide range of services",
    },
    {
      title: "Veekites Global Services Limited",
      text: "Civil, Mechanical,electric, Building engineering, general Supply as well as Technical company of the milleniueum",
    },
    {
      title: "Veekites Global Services Limited",
      text: "To highlight and slove crucial technical issues in Engineering Constructions and supply industry to the satisfactory of our valued Clients",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Infrastructure Development",
      description:
        "We specialize in the design and construction of infrastructure that defines the modern landscape. From towering skyscrapers to expansive bridges, our civil engineering expertise ensures projects that are safe, sustainable, and visually striking. We manage every phase, from concept to completion, delivering on time and within budget.",
      image: image1, // replace with real image
    },
    {
      id: 2,
      title: "Urban Planning",
      description:
        "At Veekites, our projects are a testament to our commitment to quality, innovation, and client satisfaction. From complex civil engineering challenges to groundbreaking work in the oil and gas industry, our portfolio spans a wide range of successful ventures. Each project we undertake is a reflection of our expertise, collaborative spirit, and unwavering dedication to excellence",
      image: image2,
    },
    {
      id: 3,
      title: "Environmental Engineering",
      description:
        "At Veekites, our projects are a testament to our commitment to quality, innovation, and client satisfaction. From complex civil engineering challenges to groundbreaking work in the oil and gas industry, our portfolio spans a wide range of successful ventures. Each project we undertake is a reflection of our expertise, collaborative spirit, and unwavering dedication to excellence.",
      image: image1,
    },
    {
      id: 4,
      title: "ICT Solutions",
      description:
        "Offering cutting-edge ICT services, software development, and systems integration.",
      image: image2,
    },
  ];

  return (
    <>
      {/* <div className="h-[300px] sm:h-[400px] md:h-screen  relative !-top-21 overflow-hidden"> */}
      <div className="relative overflow-hidden !-top-21 h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/AboutUsWeb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0000009e]"></div>

        {/* Slider Content */}
        <div className="absolute inset-0 flex items-center">
          <div
            className="
        bg-[#454545] text-white p-4 sm:p-6 md:p-8
        max-w-[280px] sm:max-w-md md:w-[500px]
        ml-4 sm:mx-auto md:ml-[137px]
        text-left relative z-10
      "
          >
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
                >
                  <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    {slide.text}
                  </p>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <ProjectCarousel />

      <div className="w-11/12 mx-auto">
        <div className="hidden  lg:flex justify-between items-center">
          <h1 className="relative font-extrabold text-lg text-[#A02B2D] uppercase">Our Services</h1>

          {/* <Link to="/our-services" className="text-black">
            View all
          </Link> */}
        </div>
        <BrochureSection />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                cover={
                  <img
                    alt={service.title}
                    src={service.image}
                    className="!rounded-none h-48 w-full object-cover" // 👈 fixed height + cover
                  />
                }
                className="flex flex-col !border-none !rounded-none "
              >
                <div className="flex flex-col h-full justify-between px-3">
                  <Meta
                    title={
                      <span className="text-lg font-semibold">
                        {service.title}
                      </span>
                    }
                    description={service.description?.slice(0, 70)}
                  />
                  <div className="mt-5">
                    <Link
                      to="our-services"
                      state={{ service }} 
                      className="!text-black hover:underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div> */}
      </div>

     

      <div className="mx-auto w-11/12">
        <div className="flex justify-between items-center my-3">
          <h1 className="relative font-extrabold font text-lg uppercase text-[#A02B2D]">Our Projects</h1>

          <Link to="/our-projects" className="text-black">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              cover={
                <img
                  alt={service.title}
                  src={service.image}
                  className="!rounded-none h-48 w-full object-cover" // 👈 fixed height + cover
                />
              }
              className="!border-none !rounded-none"
            >
              <div className="flex flex-col h-full justify-between px-3">
                <Meta
                  title={
                    <span className="text-lg font-semibold">
                      {service.title}
                    </span>
                  }
                  description={service.description?.slice(0, 70)}
                />
                <div className="flex justify-left mt-5">
                  <Link to="#" className="!text-black hover:underline">
                    Learn more
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>


       <div className="my-10">
        <Testimony />
      </div>

      {/* <div className="mt-6">
        <Map />
      </div> */}
    </>
  );
};

export default Home;
