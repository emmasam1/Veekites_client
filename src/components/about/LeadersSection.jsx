import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Managingdirector from "../../assets/md.jpg"
import director from "../../assets/director.jpg"
import gm from "../../assets/gm.jpg";

const testimonials = [
  {
    name: "Victor Isereke (PhD)",
    role: "CEO/Managing Director",
    img: Managingdirector,
    text: "Everyone has their own life to live, each person’s life is their own journey",
  },
  {
    name: "Ebilade Pondei",
    role: "Director",
    img: director,
    text: "If I am worth anything later, I am worth something now. For wheat is wheat even if people think it is grass in the beginning",
  },
  {
    name: "Tare-ere P. Seimode",
    role: "General Manager",
    img: gm,
    text: "Have the determination of a mirror because no matter how many pieces it shatters into, it never loses its ability to reflect",
  },
];

const LeadersSection = () => {
  return (
    <div className="relative bg-[url('assets/testimonial.jpg')] bg-cover bg-center py-20 w-11/12 mx-auto">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className=" relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="pb-25"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center text-center space-y-4 text-white w-11/12">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white"
                />
                <h3 className="font-bold text-white">{t.name}</h3>
                <p className="text-sm text-gray-200">{t.role}</p>
                <p className="max-w-2xl mx-auto italic">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LeadersSection;
