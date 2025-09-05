


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
  { id: 1, title: "Land Minning", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project1 },
  { id: 2, title: "Work Management", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project2 },
  { id: 3, title: "Material Engineering", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project3 },
  { id: 4, title: "Power and Energy", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project1 },
  { id: 5, title: "Land Minning", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project3 },
  { id: 6, title: "Work Management", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project2 },
  { id: 7, title: "Material Engineering", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project3 },
  { id: 8, title: "Power and Energy", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project1 },
  { id: 9, title: "Work Management", desc: "Lorem ipsum dolor sit amet consectetur adipisci elit sed do eiusmod tempor", img: project2 }
];

// Dummy Latest Project slides
const latestProjects = [
  {
    id: 1,
    title: "Mega Bridge Construction",
    desc: "A landmark bridge project showcasing our engineering expertise and innovative construction methods.",
    img: prj
  },
  {
    id: 2,
    title: "Green Energy Plant",
    desc: "A sustainable energy project delivering clean power and driving eco-friendly development.",
    img: prj1
  }
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
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  return (
    <div>
      {/* Hero Section */}
      <div className="h-[300px] -top-21 relative bg-[url(/src/assets/service_hero.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="bg-[#0000009e] h-full flex justify-center items-center flex-col">
          <h2 className="text-5xl font-bold text-center text-white">Projects</h2>
          <p className="mt-2 text-lg text-white px-4 text-center max-w-2xl">
            Delivering innovative solutions across construction, energy, ICT, and more to help businesses grow and thrive.
          </p>
        </div>
      </div>

      {/* New Section */}
      <div className="max-w-7xl mx-auto pb-12 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#A02B2D] leading-tight">
            Delivering Impactful <br /> Solutions Across <br /> Industries
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Veekites global services limited is widely recognized as one of the most professional companies
            offering a wide range of services in the fields of engineering, construction, supplies, and training,
            with a team of directors and senior executives who are experts in their chosen fields. Each member
            of this formidable team offers a range of combined experience in their areas of specialty.
          </p>
        </div>
        <div>
          <img src={projbg} alt="Impactful Solutions" className="w-full h-80 object-cover shadow-md" />
        </div>
      </div>

      {/* Featured Projects */}
      <div className="text-center mb-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#A02B2D]">
          Featured Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Explore a selection of our most impactful projects, where innovation meets excellence. 
        </p>
      </div>

      <div className="max-w-7xl mx-auto pb-16 px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{proj.desc}</p>
                <Link
                  to={`/project/${slugify(proj.title)}/${proj.id}`}
                  className="text-orange-600 mt-4 text-sm font-medium hover:underline inline-block"
                >
                  SEE MORE
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
  <h1 className="pb-10 font-bold text-[#A02B2D] text-4xl text-center">
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
              <h3 className="text-3xl font-bold text-[#A02B2D] mb-4">
                {proj.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {proj.desc}
              </p>
              <Link
                to={`/project/${slugify(proj.title)}/${proj.id}`}
                className="bg-[#A02B2D] w-40 text-white px-6 py-3 font-medium rounded-lg shadow hover:bg-orange-700 transition inline-block"
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
