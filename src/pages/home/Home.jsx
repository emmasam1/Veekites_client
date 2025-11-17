import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "antd";
import { Link } from "react-router";
import Testimony from "../../components/testimony/Testimony";
import ProjectCarousel from "../../components/home/ProjectCarousel";
import BrochureSection from "../../components/home/BrochureSection";
import { PiGreaterThanLight } from "react-icons/pi";
import { slides } from "../../datas/projects";


import { FaOilWell } from "react-icons/fa6";
import { GiMiniSubmarine } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

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

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // ✅ Utility to slugify title
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const services = [
    {
      title: "civil engineering",
      description:
        "We provide exceptional construction solutions meticulously crafted to meet the unique needs of our clients.",
      icon: <MdEngineering className="!text-white text-2xl" />,
    },
    {
      title: "marine operations",
      description:
        "We deliver comprehensive marine solutions that set the standard in the industry.",
      icon: <GiMiniSubmarine className="!text-white text-2xl" />,
    },
    {
      title: "oil and gas",
      description:
        " Veekites delivers exceptional services that encompass every aspect of the oil and gas value chain, ensuring unparalleled quality and expertise.",
      icon: <FaOilWell className="!text-white text-2xl" />,
    },
  ];

    useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/projects`);
        const data = res.data.projects || [];
        setProjects(data.slice(0, 4)); // 👈 fetch only 4 projects
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

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
         !bg-[#a02b2dd9] text-white p-4 sm:p-6 md:p-8 rounded-lg
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
                  className="text-left "
                >
                  {/* <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-2">
                    {slide.title}
                  </h2> */}
                  <p className="text-gray-300 text-2xl sm:text-sm md:text-2xl">
                    {slide.text}
                  </p>
                </motion.div>
              ))}
            </Slider>

            <Button className="!bg-white !border-none !text-[#A02B2D] !rounded-none !px-4 !py-2 !mt-3 hover:!text-[#A02B2D]">
              <Link to="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <ProjectCarousel />

      <div className="w-11/12 mx-auto my-16">
        <h2 className="text-lg font-bold mb-12 uppercase">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-md rounded-lg text-center"
              bordered={false}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#A02B2D] w-16 h-16 flex items-center justify-center rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 capitalize">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            type="primary"
            size="large"
            className="!bg-[#A02B2D] !rounded-none"
          >
            <Link to="/our-services"> See All Services →</Link>
          </Button>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <BrochureSection />
      </div>

      <div className="mx-auto w-11/12">
        <div className="flex justify-between items-center my-3">
          <h1 className="relative font-extrabold font text-lg uppercase">
            Our Projects
          </h1>

          <Link
            to="/our-projects"
            className="!text-[#A02B2D] flex items-center gap-0.5"
          >
            View all <PiGreaterThanLight />
            <PiGreaterThanLight className="relative -left-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(
            (
              proj,
              index // 👈 show only 4
            ) => (
              <Card
                key={index}
                cover={
                  <img
                    alt={proj.title}
                    src={proj.mainImage?.url}
                    className="!rounded-none h-48 w-full object-cover"
                  />
                }
                className="!border-none !rounded-none"
              >
                <div className="flex text-center flex-col h-full justify-between px-3">
                 <div className="h-15">
                   <span className="text-sm font-semibold uppercase">
                    {proj.title}
                  </span>
                 </div>

                  <p>{proj.description?.slice(0, 80)}....</p>
                  <div className="flex justify-center mt-5">
                    <Link
                       to={`/project/${slugify(proj.title)}/${proj._id}`}
                      className="hover:underline !text-[#A02B2D] "
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      </div>

      <div className="my-10">
        <Testimony />
      </div>
    </>
  );
};

export default Home;
