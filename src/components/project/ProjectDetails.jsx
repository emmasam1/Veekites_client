
import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { IoChevronBackSharp } from "react-icons/io5";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-loading-skeleton/dist/skeleton.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import fallbackImg from "../../assets/project-details.jpg";

const API_BASE = import.meta.env.VITE_API_URL;

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState(null);

  // Fetch project by ID
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/projects/${id}`);
        setProject(res.data.project);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Unable to load project details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  // ESC key handler for modal close
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

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 animate-pulse">
        <Skeleton height={400} className="mb-6 rounded-md" />
        <Skeleton count={4} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} height={180} className="rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  if (!project) {
    return <p className="text-center py-20">Project not found.</p>;
  }

  const { title, description, client, location, area, year, sector, mainImage, gallery } = project;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[url('/src/assets/service_hero.jpg')] bg-cover bg-center -top-14">
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Project Details</h1>
          <p className="mt-2 text-sm md:text-base">
            Home &gt; Project &gt; {title}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back button */}
        <div className="w-20 gap-2 mb-5">
          <Link to="/our-projects" className="flex items-center cursor-pointer w-20 gap-2">
            <IoChevronBackSharp /> Back
          </Link>
        </div>

        {/* Main Image with LazyLoad + Skeleton */}
        <div className="relative w-full h-62 sm:h-72 md:h-[600px] mb-8 rounded-md overflow-hidden">
          {!mainImage?.url ? (
            <Skeleton height="100%" className="rounded-md" />
          ) : (
            <LazyLoadImage
              src={mainImage.url || fallbackImg}
              alt={title}
              effect="blur"
              className="w-full h-full object-cover rounded-md"
              wrapperClassName="w-full h-full block"
            />
          )}
        </div>

        {/* Info & Description */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {/* Left Info */}
          <aside className="bg-gray-900 text-white p-6 shadow-lg space-y-4 rounded-md">
            <h3 className="text-lg font-semibold mb-4">Project Information</h3>
            <ul className="space-y-1 text-sm">
              {client && (
                <li className="border-b border-gray-500 py-2">
                  <strong>Client:</strong> {client}
                </li>
              )}
              {location && (
                <li className="border-b border-gray-500 py-2">
                  <strong>Location:</strong> {location}
                </li>
              )}
              {area && (
                <li className="border-b border-gray-500 py-2">
                  <strong>Area:</strong> {area}
                </li>
              )}
              {year && (
                <li className="border-b border-gray-500 py-2">
                  <strong>Year:</strong> {year}
                </li>
              )}
              {sector && (
                <li className="border-b border-gray-500 py-2">
                  <strong>Sector:</strong> {sector}
                </li>
              )}
            </ul>
          </aside>

          {/* Description */}
          <section className="md:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#A02B2D]">
              {title}
            </h2>

            {description?.split("/n/").map((para, i) => (
              <p
                key={i}
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
              >
                {para.trim()}
              </p>
            ))}
          </section>
        </div>

        {/* Gallery */}
        {gallery?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImg(img.url)}
              >
                <div className="w-full h-32 sm:h-40 md:h-44 rounded-lg overflow-hidden">
                  <LazyLoadImage
                    src={img.url}
                    alt={`${title} Gallery ${i + 1}`}
                    effect="blur"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full block"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Plus className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
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

