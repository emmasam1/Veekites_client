import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Settings, Globe, Handshake } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Multi-Sector Expertise",
    desc:
      "Offering integrated solutions across construction, project management, oil & gas, procurement, and marine services.",
    icon: Settings,
    textColor: "text-indigo-500",
    bgColor: "bg-indigo-500",
    learnMore: `We provide integrated solutions across construction, project management, oil & gas, procurement, and marine services. As your one-stop partner, we streamline processes and deliver exceptional results tailored to your needs.`,
  },
  {
    id: "02",
    title: "Local Insight, Global Standards",
    desc:
      "Deep understanding of Nigeria’s environment and ports, combined with adherence to international best practices.",
    icon: Globe,
    textColor: "text-pink-500",
    bgColor: "bg-pink-500",
    learnMore: `With a deep understanding of Nigeria’s unique environments and ports, we combine local knowledge with international best practices. Our commitment to safety, efficiency, and sustainability ensures that your projects meet global standards.`,
  },
  {
    id: "03",
    title: "Proven Track Record of Collaboration",
    desc:
      "Strong partnerships with industry stakeholders, offshore operators, regulators, and logistics providers.",
    icon: Handshake,
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-500",
    learnMore: `Our strong partnerships with industry stakeholders, offshore operators, regulators, and logistics providers enable us to deliver seamless project execution. Trust us to bring together the right expertise for reliable and successful outcomes.`,
  },
];

export default function SetApart() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto bg-white px-6 md:px-12 py-12 md:py-20">

    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-lg md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
        WHAT SETS <span className="text-[#A02B2D]">VEEKITES</span> APART
      </h2>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        At <span className="font-semibold text-gray-900">VEEKITES</span>, we take pride in 
        offering more than just <span className="italic text-gray-800">services</span>; 
        we deliver an <span className="text-[#A02B2D] font-medium">experience</span>. 
        Here’s what sets us apart:
      </p>
    </div>


        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {features.map((f, i) => (
            <article
              key={f.id}
              className="relative bg-white p-6 md:p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Number badge */}
              <div className="flex md:block justify-center md:justify-start">
                <div className="relative">
                  <span
                    aria-hidden
                    className={`absolute -top-3 -left-3 w-9 h-9 rounded-full ${
                      i === 0
                        ? "bg-indigo-100"
                        : i === 1
                        ? "bg-pink-100"
                        : "bg-yellow-100"
                    } opacity-80`}
                  />
                  <span
                    aria-hidden
                    className={`absolute -top-5 -left-5 w-14 h-14 rounded-full opacity-30 ${
                      i === 0
                        ? "bg-indigo-100"
                        : i === 1
                        ? "bg-pink-100"
                        : "bg-yellow-100"
                    }`}
                  />
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100">
                    <span className="text-sm font-bold text-gray-800">
                      {f.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 md:mt-4 text-center md:text-left">
                <h3 className="text-base font-semibold text-gray-900 mb-6">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{f.desc}</p>

                <button
                  onClick={() => setSelectedFeature(f)}
                  className="inline-flex items-center cursor-pointer text-sm text-[#A02B2D] hover:text-[#c52e30] font-bold"
                >
                  Learn more
                  <motion.svg
                    className="ml-2 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </motion.svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-10 relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedFeature(null)}
                className={`absolute top-4 right-4 p-2 rounded-full shadow-md text-white font-bold cursor-pointer ${selectedFeature.bgColor}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <selectedFeature.icon
                  className={`w-14 h-14 ${selectedFeature.textColor}`}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {selectedFeature.title}
              </h3>

              {/* Content */}
              <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line text-center">
                {selectedFeature.learnMore}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
