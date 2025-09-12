import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fd from '../../assets/fd.jpeg'
import kalm from '../../assets/kalm.png'
import nbrri from '../../assets/nbrri.jpeg'


const Testimony = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slide: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonies = [
    {
      id: 1,
      name: "Thompson, Project Manager",
      role: "Federal Polytechnic Ukana",
      message:
        "Working with Veekites was a game-changer for our project. Their expertise in civil engineering and project management ensured we stayed on schedule and within budget. We couldn't have done it without them.",
      image: fd,
    },
    {
      id: 2,
      name: "Okechukwu, Lead Engineer",
      role: "Kalm Marine",
      message:
        "Veekites transformed our infrastructure project with their innovative solutions. Their attention to detail and commitment to sustainability set them apart. Our entire team was impressed by their professionalism and results.",
      image: kalm
    },
    {
      id: 3,
      name: "NBRRI",
      role: "Michael, Senior Construction Supervisor",
      message:
        "Veekites delivered beyond our expectations. Their ability to manage complex urban development projects while maintaining efficiency and quality was outstanding. We look forward to partnering with them again in the future.",
      image: nbrri
    },
    
  ];

  return (
    <div>
      <section class="bg-white py-16">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <p class="text-[#A02B2D] font-semibold uppercase">Testimonials</p>
            <h2 class="text-3xl md:text-4xl font-bold leading-snug mb-4">
              What Our Clients Say About Us
            </h2>
            <p class="text-gray-600 mb-6">
              Hear directly from our clients who have trusted us with their
              projects. Their satisfaction and success stories inspire us to
              keep delivering excellence.
            </p>
            <button class="!bg-[#A02B2D] text-white px-6 py-3 !rounded-none hover:bg-orange-700 transition">
              Contact Us
            </button>
          </div>

          {/* <!-- Right Content (Testimonial Card) --> */}
          <div class="relative">
            <Slider {...settings}>
              {testimonies.map((post, index) => {
                return (
                  <div key={index} class="bg-white border-l-4 border-[#A02B2D] p-6 shadow-lg rounded-md">
                    <p class="text-gray-700 italic mb-4">
                      "{post.message}!"
                    </p>
                    <div class="flex items-center gap-4">
                      <img
                        src={post.image}
                        alt="client"
                        class="w-20 h-20 object-contain"
                      />
                      <div>
                        <h4 class="text-lg font-semibold">{post.name}</h4>
                        <p class="text-sm text-gray-500">
                          {post.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            {/* <!-- Decorative Play Button (optional for video testimonial) --> */}
            <div class="absolute -left-8 top-1/2 transform -translate-y-1/2">
              <button class="!bg-[#A02B2D] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-orange-700 transition">
                
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
