import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { IoChevronBackSharp } from "react-icons/io5";

// Dummy fallback images
import fallbackImg from "../../assets/project-details.jpg";
import gallery1 from "../../assets/project-11.jpg";
import gallery2 from "../../assets/project-10.jpg";
import gallery3 from "../../assets/project-9.jpg";
import gallery4 from "../../assets/project-11.jpg";
import gallery5 from "../../assets/project-9.jpg";

const dummyProjects = [
  {
    id: "1",
    title: "Mountain Tunnel",
    client: "RRS Company",
    location: "San Francisco",
    area: "550,000 sf",
    year: 2019,
    budget: "$245,000,000",
    architect: "Scott & Austin",
    sector: "Tunnel, Transport",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem?",
      "Modi cum fugit officia dolores eligendi, rem. Quibusdam quas impedit perspiciatis iure maiores.",
      "Aliquid nemo consequuntur cupiditate delectus sapiente doloribus dolorem, non laudantium mollitia magnam repellat atque quia!",
    ],
    mainImage: fallbackImg,
    gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
  },
  {
    id: "2",
    title: "City Bridge",
    client: "ABC Infrastructure",
    location: "New York",
    area: "300,000 sf",
    year: 2021,
    budget: "$100,000,000",
    architect: "Doe & Partners",
    sector: "Bridge, Transport",
    description: [
      "Bridge construction project with modern design.",
      "Focused on durability and sustainability.",
    ],
    mainImage: gallery2,
    gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);
  const [project, setProject] = useState(null);

  // Find project by id
  useEffect(() => {
    const found = dummyProjects.find((p) => p.id === id);
    setProject(found || dummyProjects[0]); // fallback
  }, [id]);

  // ESC key handler to close modal
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setSelectedImg(null);
  }, []);

  useEffect(() => {
    if (selectedImg) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, handleKeyDown]);

  if (!project) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[url('/src/assets/service_hero.jpg')] bg-cover bg-center -top-14">
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Project Details</h1>
          <p className="mt-2 text-sm md:text-base">
            Home &gt; Project &gt; {project.title}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className=" w-20 gap-2  mb-5">
          <Link to="/our-projects" className="flex items-center cursor-pointer w-20 gap-2">
            <IoChevronBackSharp /> Back
          </Link>
        </div>
        {/* Main Image */}
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-64 sm:h-72 md:h-[400px] object-cover rounded-lg shadow-lg"
        />

        {/* Info & Description */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {/* Left Info */}
          <aside className="bg-gray-900 text-white p-6 shadow-lg space-y-4">
            <h3 className="text-lg font-semibold mb-4">Project Information</h3>
            <ul className="space-y-1 text-sm">
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Client:</strong> {project.client}
              </li>
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Location:</strong> {project.location}
              </li>
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Area:</strong> {project.area}
              </li>
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Year:</strong> {project.year}
              </li>
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Budget:</strong> {project.budget}
              </li>
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Architect:</strong> {project.architect}
              </li>
              <li className="border-b-gray-500 border-b-1 py-2">
                <strong>Sector:</strong> {project.sector}
              </li>
            </ul>
          </aside>

          {/* Right Description */}
          <section className="md:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#A02B2D]">
              {project.title}
            </h2>
            {project.description.map((text, i) => (
              <p
                key={i}
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
              >
                {text}
              </p>
            ))}
          </section>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
          {project.gallery.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`${project.title} Gallery ${i + 1}`}
                className="w-full h-32 sm:h-40 md:h-44 object-cover rounded-lg shadow transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Plus className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 text-[#A02B2D] text-3xl font-bold cursor-pointer"
                aria-label="Close preview"
              >
                ×
              </button>
              <img
                src={selectedImg}
                alt="Preview"
                className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
