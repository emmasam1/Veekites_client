

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projectImg1 from "../../assets/service.webp";
import projectImg2 from "../../assets/service2.webp"; 
import projectImg3 from "../../assets/service3.webp";
import projectImg4 from "../../assets/service5.webp";

const ProjectCarousel = ({ autoplaySpeed = 5000 }) => {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const progressTimer = useRef(null);

  const slides = [
    {
      title: "Energizing NGL Hub in 5 Months with High-Voltage EPC Solution",
      category: "Power + Utilities",
      description:
        "Two-phase project planning with flexible engineering, agile problem-solving, and dedication to success",
      image: projectImg1,
      link: "#",
    },
    {
      title: "Transforming Energy Infrastructure with EPC Solutions",
      category: "Energy + Infrastructure",
      description:
        "Comprehensive engineering, procurement, and construction services that ensure timely project delivery.",
      image: projectImg2,
      link: "#",
    },
    {
      title: "Driving Growth with Next-Gen Utility Innovations",
      category: "Utilities + Innovation",
      description:
        "Cutting-edge utility management systems designed to scale with tomorrow’s energy demands.",
      image: projectImg3,
      link: "#",
    },
    {
      title: "Driving Growth with Next-Gen Utility Innovations",
      category: "Utilities + Innovation",
      description:
        "Cutting-edge utility management systems designed to scale with tomorrow’s energy demands.",
      image: projectImg4,
      link: "#",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed,
    beforeChange: () => setProgress(0),
  };

  // progress bar animation
  useEffect(() => {
    if (progressTimer.current) clearInterval(progressTimer.current);
    setProgress(0);

    const tick = 50;
    const step = (tick / autoplaySpeed) * 100;

    progressTimer.current = setInterval(() => {
      setProgress((p) => {
        const next = p + step;
        if (next >= 100) {
          clearInterval(progressTimer.current);
          return 100;
        }
        return next;
      });
    }, tick);

    return () => {
      if (progressTimer.current) clearInterval(progressTimer.current);
    };
  }, [autoplaySpeed]);

  return (
    <div className="w-full px-4 md:px-10 mb-12">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 md:grid-cols-2 relative overflow-visible ">
              {/* Left content */}
              <div className="relative bg-[#dbe9f2] md:h-[560px] p-10 md:p-16 z-10">
                <p className="text-sm font-semibold text-[#173447] mb-3">
                  FEATURED WORK
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-[#0f2b36] mb-5 max-w-lg">
                  {slide.title}
                </h3>

                <p className="text-sm text-[#1f4854] font-medium mb-4">
                  {slide.category}
                </p>

                <p className="text-base text-[#274a53] max-w-md mb-8">
                  {slide.description}
                </p>

                <Link
                  to={slide.link}
                  className="inline-block bg-[#A02B2D] text-white font-semibold px-6 py-3"
                >
                  Learn more
                </Link>
              </div>

              {/* Right column */}
              <div className="relative flex flex-col overflow-visible">
                {/* Overlapping image */}
                <div className="relative md:-ml-14 md:mt-12 z-20">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full md:h-[420px] h-[260px] object-cover block shadow-md"
                    draggable={false}
                  />
                </div>

                {/* Progress bar + arrows */}
                <div className="w-full md:w-[85%] mt-6 px-6 md:px-0 flex items-center justify-between z-30">
                  {/* Progress bar */}
                  <div className="relative flex-1 h-[4px] bg-gray-200 rounded-sm overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#18e39a]"
                      style={{
                        width: `${progress}%`,
                        transition: "width 50ms linear",
                      }}
                    />
                  </div>

                  {/* Arrows */}
                  <div className="ml-6 flex items-center space-x-4">
                    <button
                      aria-label="previous"
                      onClick={() =>
                        sliderRef.current && sliderRef.current.slickPrev()
                      }
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm"
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      aria-label="next"
                      onClick={() =>
                        sliderRef.current && sliderRef.current.slickNext()
                      }
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
