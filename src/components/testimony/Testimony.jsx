import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      name: "John Doe",
      role: "CEO, BuildRight Ltd.",
      message:
        "Working with Veekites Global Services was the best decision we made. Professional team, timely delivery, and excellent quality of work.",
      image: "https://i.pravatar.cc/80?img=5",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Operations Manager, GreenTech",
      message:
        "Their dedication and expertise are unmatched. They helped us streamline our operations and achieve results beyond expectations.",
      image: "https://i.pravatar.cc/80?img=12",
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Director, Prime Logistics",
      message:
        "Reliable, efficient, and innovative. Veekites Global Services truly understands client needs and delivers on every promise.",
      image: "https://i.pravatar.cc/80?img=20",
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "Founder, Elegant Interiors",
      message:
        "From start to finish, their service was seamless. I highly recommend them for any business looking to scale with confidence.",
      image: "https://i.pravatar.cc/80?img=30",
    },
  ];

  return (
    <div>
      <section class="bg-white py-16">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <p class="text-[#FB2C36] font-semibold uppercase">Testimonials</p>
            <h2 class="text-3xl md:text-4xl font-bold leading-snug mb-4">
              What Our Clients Say About Us
            </h2>
            <p class="text-gray-600 mb-6">
              Hear directly from our clients who have trusted us with their
              projects. Their satisfaction and success stories inspire us to
              keep delivering excellence.
            </p>
            <button class="!bg-[#FB2C36] text-white px-6 py-3 rounded-full hover:bg-orange-700 transition">
              Contact Us
            </button>
          </div>

          {/* <!-- Right Content (Testimonial Card) --> */}
          <div class="relative">
            <Slider {...settings}>
              {testimonies.map((post, index) => {
                return (
                  <div key={index} class="bg-white border-l-4 border-[#FB2C36] p-6 shadow-lg rounded-md">
                    <p class="text-gray-700 italic mb-4">
                      "{post.message}!"
                    </p>
                    <div class="flex items-center gap-4">
                      <img
                        src="https://i.pravatar.cc/80?img=5"
                        alt="client"
                        class="w-16 h-16 rounded-full object-cover"
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
              <button class="!bg-[#FB2C36] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-orange-700 transition">
                
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
