import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Slider from "react-slick";
import projbg from "../../assets/projbg.jpeg";
import prj from "../../assets/prj.jpeg";
import prj1 from "../../assets/prj1.jpeg";
import project1 from "../../assets/project-11.jpg";
import project2 from "../../assets/project-10.jpg";
import project3 from "../../assets/project-9.jpg";

// Dummy data
const projects = [
  {
    id: 1,
    title: "Land Minning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project1,
  },
  {
    id: 2,
    title: "Work Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project2,
  },
  {
    id: 3,
    title: "Material Engineering",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project3,
  },
  {
    id: 4,
    title: "Power and Energy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project1,
  },
  {
    id: 5,
    title: "Land Minning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project3,
  },
  {
    id: 6,
    title: "Work Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project2,
  },
  {
    id: 7,
    title: "Material Engineering",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project3,
  },
  {
    id: 8,
    title: "Power and Energy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project1,
  },
  {
    id: 9,
    title: "Work Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor",
    img: project2,
  },
];

// Dummy Latest Project slides
const latestProjects = [
  {
    id: 1,
    title: "Mega Bridge Construction",
    desc: "A landmark bridge project showcasing our engineering expertise and innovative construction methods.",
    img: prj,
  },
  {
    id: 2,
    title: "Green Energy Plant",
    desc: "A sustainable energy project delivering clean power and driving eco-friendly development.",
    img: prj1,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  pauseOnHover: true,
  dotsClass: "slick-dots custom-dots",
};

const Projectcomponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Slider state
  const [activeSlide, setActiveSlide] = useState(0);

  // Autoplay for slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % latestProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Utility to slugify title
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div>
      {/* Hero Section */}
      <div className="h-[300px] -top-21 relative bg-[url(/src/assets/service_hero.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="bg-[#0000009e] h-full flex justify-center  flex-col">
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Projects
            </h2>
            <p className="mt-2 text-lg text-white max-w-2xl">
              Delivering innovative solutions across construction, <br/>energy, ICT,
              and more to help businesses grow and thrive.
            </p>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="w-11/12 mx-auto pb-12 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-lg uppercase font-bold  leading-tight">
            Delivering Impactful <br /> Solutions Across <br /> Industries
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Veekites global services limited is widely recognized as one of the
            most professional companies offering a wide range of services in the
            fields of engineering, construction, supplies, and training, with a
            team of directors and senior executives who are experts in their
            chosen fields. Each member of this formidable team offers a range of
            combined experience in their areas of specialty.
          </p>
        </div>
        <div>
          <img
            src={projbg}
            alt="Impactful Solutions"
            className="w-full h-80 object-cover shadow-md"
          />
        </div>
      </div>

      {/* Featured Projects */}
      <div className="lg:text-center mb-12 max-w-7xl mx-auto px-6">
        <h2 className="text-lg md:text-lg font-bold uppercase leading-snug">
          Featured Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto sm:text-left">
          Explore a selection of our most impactful projects, where innovation
          meets excellence.
        </p>
      </div>

      <div className="w-11/12 mx-auto pb-16 px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white overflow-hidden transition"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="!rounded-none h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold uppercase">{proj.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{proj.desc}</p>
                <Link
                  to={`/project/${slugify(proj.title)}/${proj.id}`}
                  className="text-[#A02B2D] mt-4 text-sm font-medium hover:underline inline-block"
                >
                 Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-3 mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-40"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-[#A02B2D] text-white"
                  : "border text-gray-600 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <h1 className="text-lg font-bold uppercase leading-snug mb-4 text-center">
          Latest Project
        </h1>
        <div className="max-w-7xl mx-auto px-6">
          <Slider {...settings}>
            {latestProjects.map((proj) => (
              <div key={proj.id} className="px-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Image */}
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-80 object-cover shadow-md rounded-lg"
                  />

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className=" leading-snug font-bold text-lg uppercase mb-4">
                      {proj.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                    <Link
                      to={`/project/${slugify(proj.title)}/${proj.id}`}
                      className="bg-[#A02B2D] w-41 text-white px-6 py-2 rounded-lg shadow transition inline-block"
                    >                                                                                                                                                                                                                                                                                                                                                           
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projectcomponent;
