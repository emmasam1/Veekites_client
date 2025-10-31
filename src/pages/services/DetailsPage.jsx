import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { Phone, Mail, CheckCircle } from "lucide-react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/services/${id}`
        );
        setService(res.data.data);
      } catch (err) {
        console.error("Failed to load service:", err);
      } finally {
        setLoading(false);
      }
    };

    if (!service) fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto w-11/12 py-10">
        <Skeleton height={450} />
        <Skeleton height={30} width={300} className="mt-6" />
        <Skeleton count={5} />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p>Please go back and select a service.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-[#A02B2D] text-white px-6 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-11/12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="order-2 md:order-1 md:col-span-1 md:sticky md:top-6 h-fit space-y-6">
          {/* Quick Info */}
          <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 text-gray-800">
            <h2 className="text-xl font-bold border-b pb-2">Quick Info</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />
                Duration: 2 weeks
              </li>
              <li>
                <CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />
                Category: Construction
              </li>
              <li>
                <CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />
                Rating: ⭐⭐⭐⭐☆
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-[#A02B2D] shadow-md rounded-2xl p-6 text-white space-y-4">
            <h2 className="text-xl font-bold">Need This Service?</h2>
            <p className="text-sm">
              Get in touch with our team to discuss your project and get a free
              quote.
            </p>

            <div className="space-y-2">
              <button className="w-full bg-white text-[#A02B2D] font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                Request a Quote
              </button>
              <a
                href="tel:09168051180"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Phone className="w-4 h-4" /> Tel: +234 (0) 916 805 1180
              </a>
              <a
                href="tel:080000400400"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Phone className="w-4 h-4" /> Toll Free: 0800-00-400-400
              </a>
              <a
                href="mailto:info@veekites.com"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Mail className="w-4 h-4" /> info@veekites.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2 md:col-span-2">
          <div className="overflow-hidden shadow-md rounded-xl">
            <img
              src={service.image?.url || service.image}
              alt={service.title}
              className="w-full h-[450px] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <h1 className="font-bold text-4xl mt-8">{service.title}</h1>
          <p className="my-4 text-gray-700 leading-relaxed">
            {service.description}
          </p>

          {/* Gallery */}
          {service.gallery && service.gallery.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-sm"
                  >
                    <img
                      src={img.url}
                      alt={`Gallery ${index}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
