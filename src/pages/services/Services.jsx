import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button, Divider } from "antd";
import { IoChevronBackSharp } from "react-icons/io5";
import { useLocation } from "react-router";

import heroImage from "../../assets/service_bg.jpeg";

// ✅ Capabilities arrays
import {
  ConstructionCapability,
  OilCapability,
  MarineCapability,
  ProjectCapability,
  IctCapability,
  ProcurementCapability,
  CustomizedCapability,
} from "./capabilitiesData";

const API_BASE = import.meta.env.VITE_API_URL;


const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [parentService, setParentService] = useState(null);
  const location = useLocation();

  // ✅ Load selected service from navigation
  useEffect(() => {
    if (location.state?.service) {
      setSelectedService(location.state.service);
      setParentService(location.state.service.title);
    }
  }, [location.state]);

  // ✅ Fetch Services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        //const res = await axios.get("https://veekites.onrender.com/api/services");
        const res = await axios.get(`${API_BASE}/api/services`);
        // Handle both array or object-based API responses
        const data = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // ✅ Match capability to selected service
  const activeCapabilities = useMemo(() => {
    const baseTitle =
      (parentService || selectedService?.title || "").toLowerCase();
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
            selectedService
              ? selectedService.image?.url || selectedService.image
              : heroImage
          })`,
        }}
      >
        <div className="bg-[#0000009e] h-[500px] flex justify-center flex-col px-4">
          <div className="max-w-6xl w-full mx-auto">
            {selectedService && (
              <div
                className="flex items-center cursor-pointer w-20 gap-2 text-white mb-5"
                onClick={() => {
                  if (parentService && selectedService.title !== parentService) {
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
        {/* ✅ Loading skeleton */}
        {loading ? (
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Skeleton height={250} />
                <Skeleton count={3} />
              </div>
            ))}
          </div>
        ) : !selectedService ? (
          services.length > 0 ? (
            services.map((service, index) => (
              <div key={service._id || index}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                  <div className="h-80 overflow-hidden rounded-md">
                    <img
                      src={service.image?.url || service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
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
            <div className="text-center py-20 text-gray-600">
              No services available.
            </div>
          )
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
                    <div
                      key={cap.id}
                      className="bg-white shadow-md rounded-md overflow-hidden"
                    >
                      {cap.image && (
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="h-60 w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="py-4 px-4">
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
};

export default Services;
