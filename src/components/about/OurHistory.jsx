import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import historyImg from "../../assets/historyImg.jpg";

const OurHistory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-9/11 mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
       {/* Left: Image with Play Button */}
        <div className="relative rounded-xl overflow-hidden shadow-lg h-96 md:h-[32rem] lg:h-[38rem]">
        <img
            src={historyImg}
            alt="Our History"
            className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
            <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
            <span className="text-2xl md:text-3xl text-orange-600">▶</span>
            </button>
        </div>
        </div>

        {/* Right: History Text */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#A02B2D]">
            Our History
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
           Incorporated 11th june 2013, VeeKITES started as a small firm with a vision to revolutionize the
            global services industry. Over the years, we have expanded our expertise, embracing new challenges
             and growing into a leading provider of comprehensive solutions in civil engineering, oil and gas, 
             and project management. Our journey has been marked by a series of significant milestones, each 
             contributing to our legacy of excellence and innovation.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
          Veekites Global Services Limited is widely recognized as one of the most 
           professional companies offering a wide range of services in the fields of engineering, construction, 
           supplies, and training, with a team of directors and senior executives who are experts in their chosen
            fields. Each member of this formidable team offers a range of combined experience in their areas of specialty.
          </p>
        <p className="text-gray-600 leading-relaxed text-justify">
           In addition, Veekites Global Services Limited has over 50 highly competent technical and support staff, 
          all working together to deliver sustainable high-quality assets that not only meet but also exceed client expectations.
          </p>

        <p className="text-gray-600 leading-relaxed text-justify">
           Veekites Global Services Limited is fully established in Nigeria. Veekites Global Services Limited continues
            to advance on its successes by building value for its clients through the successful planning, implementation
             and management of landmark and community-based projects.
          </p>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black rounded-xl shadow-2xl max-w-4xl w-full relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
              >
                ×
              </button>

              {/* Video Player (YouTube embed example) */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Our History Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurHistory;
