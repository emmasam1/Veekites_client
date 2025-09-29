



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

const team = [
  {
    name: "Victor Isereke (PhD)",
    role: "CEO/Managing Director",
    email: "info@veekites.com",
    img: "assets/team1.jpg",
  },
  {
    name: "Ebilade Pondei",
    role: "Director",
    email: "info@veekites.com",
    img: "assets/team1.jpg",
  },
  {
    name: "Tare-ere P. Seimode",
    role: "General Manager",
    email: "info@veekites.com",
    img: "assets/team1.jpg",
  },
  {
    name: "Tochukwu Chukwurah",
    role: "⁠Legal Officer/HR",
    email: "info@veekites.com",
    img: "assets/team2.jpg",
  },
  {
    name: "Praise Bassey",
    role: "Business Developer",
    email: "info@veekites.com",
    img: "assets/team3.jpg",
  },
  {
    name: "Charles Uduakah",
    role: "Head Of Accountant",
    email: "info@veekites.com",
    img: "assets/team4.jpg",
  },
  {
    name: "Pedro Ebipade",
    role: "Field Manager",
    email: "info@veekites.com",
    img: "assets/team4.jpg",
  },
  {
    name: "Benaebi Isereke",
    role: "Procurement Supervisor",
    email: "info@veekites.com",
    img: "assets/team4.jpg",
  },
];

// Custom arrows
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
const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,   // ✅ default for desktop
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // ✅ everything below 1024px = phones & tablets
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  // responsive: [
  //   {
  //     breakpoint: 1280, // below 1280px
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1024, // below 1024px
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 768, // below 768px
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};


  return (
    <div className="py-20 w-11/12 mx-auto relative">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-left md:text-center">
        <h2 className="text-lg md:text-3xl font-bold text-black uppercase mb-6">
          Our Team
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Our team is our greatest asset. We believe in fostering a collaborative
          environment where creativity and expertise thrive, ensuring that our
          team is always equipped to deliver top-tier solutions. Meet the people
          who make it all happen and drive our success.
        </p>
      </div>

      {/* Team Slider */}
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {team.map((member, i) => (
            <div key={i} className="px-3">
              <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition h-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#A02B2D]"
                />
                <h3 className="font-semibold text-md text-gray-800">{member.name}</h3>
                <p className="text-sm text-[#A02B2D] font-medium">{member.role}</p>
                <p className="text-sm text-gray-400">{member.email}</p>
                {/* Social Icons */}
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
      </div>
    </div>
  );
};

export default TeamSection;
