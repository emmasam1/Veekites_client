import React from "react";
import { useParams, useLocation } from "react-router";
import { Phone, Mail, CheckCircle } from "lucide-react";

const DetailsPage = () => {
  const { name, id } = useParams();
  const location = useLocation();
  const service = location.state?.service;

  return (
    <div className="mx-auto w-11/12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Sidebar (sticky on large screens) */}
        <div className="order-2 md:order-1 md:col-span-1 md:sticky md:top-6 h-fit space-y-6">
          {/* Quick Info Card */}
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
          <div className="bg-[#FB2C36] shadow-md rounded-2xl p-6 text-white space-y-4">
            <h2 className="text-xl font-bold">Need This Service?</h2>
            <p className="text-sm">
              Get in touch with our team to discuss your project and get a free
              quote.
            </p>
            
            <div className="space-y-2">
              <button className="w-full bg-white text-[#FB2C36] font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                Request a Quote
              </button>
              <a
                href="tel:09168051180"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Phone className="w-4 h-4" />Tel: +234 (0) 916 805 1180
              </a>
              <a
                href="tel:080000400400"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Phone className="w-4 h-4" />Toll Free: 0800-00-400-400
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <Mail className="w-4 h-4" /> info@veekites.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2 md:col-span-2">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[350px] object-cover"
            />
          </div>
          <h1 className="font-bold text-4xl mt-8">{service.title}</h1>
          <p className="my-4 text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
