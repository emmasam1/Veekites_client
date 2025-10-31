import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-transparent transition"
    onClick={onClick}
  >
    <FiChevronsRight className="text-[#A02B2D]" size={35} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-transparent transition"
    onClick={onClick}
  >
    <FiChevronsLeft className="text-[#A02B2D]" size={35} />
  </div>
);

const TeamSection = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch team members
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get("https://veekites.onrender.com/api/team");
        setTeam(res.data.data || []);
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const mobileSettings = {
    ...settings,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-20 w-11/12 mx-auto relative">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-left md:text-center">
        <h2 className="text-lg md:text-3xl font-bold text-black uppercase mb-6">
          Our Team
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Our team is our greatest asset. We believe in fostering a collaborative environment
          where creativity and expertise thrive. Meet the people who make it all happen.
        </p>
      </div>

      {/* Desktop Slider */}
      <div className="w-full overflow-hidden hidden lg:block">
        {loading ? (
          <div className="grid grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton circle height={160} width={160} className="mx-auto mb-4" />
                <Skeleton width={120} height={20} className="mx-auto mb-2" />
                <Skeleton width={100} height={15} className="mx-auto" />
              </div>
            ))}
          </div>
        ) : team.length === 0 ? (
          <p className="text-center text-gray-600 py-10">
            No team members found.
          </p>
        ) : (
          <Slider {...settings}>
            {team.map((member) => (
              <div key={member._id} className="px-3">
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition h-full">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#A02B2D]">
                    <div
                      className="w-40 h-40 rounded-full bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${member.image?.url})` }}
                    ></div>
                  </div>
                  <h3 className="font-semibold text-md text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#A02B2D] font-medium">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.email}</p>
                  <div className="flex justify-center space-x-3 mt-4 text-gray-500">
                    <i className="fab fa-facebook-f hover:text-blue-600"></i>
                    <i className="fab fa-twitter hover:text-sky-500"></i>
                    <i className="fab fa-linkedin-in hover:text-blue-700"></i>
                    <i className="fab fa-instagram hover:text-pink-500"></i>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Mobile Slider */}
      <div className="w-full overflow-hidden block lg:hidden">
        {loading ? (
          <div className="grid grid-cols-1 gap-6">
            {[...Array(1)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton circle height={160} width={160} className="mx-auto mb-4" />
                <Skeleton width={120} height={20} className="mx-auto mb-2" />
                <Skeleton width={100} height={15} className="mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <Slider {...mobileSettings}>
            {team.map((member) => (
              <div key={member._id} className="px-3">
                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition h-full">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#A02B2D]">
                    <div
                      className="w-40 h-40 rounded-full bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${member.image?.url})` }}
                    ></div>
                  </div>
                  <h3 className="font-semibold text-md text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#A02B2D] font-medium">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.email}</p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
