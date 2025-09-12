import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mission from "../../assets/mission.jpg";
import { Button } from "antd";

const Mission = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal with Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Mission Text */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug uppercase text-black">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to be the most foremost Architectural Design, Civil,
            Mechanical, Electrical, Building Engineering, General Supply as well
            as Technical company of the millennium....
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="!bg-[#A02B2D] !rounded-none !text-white hover:!bg-[#861f21] transition"
          >
            Learn More
          </Button>
        </div>

        {/* Right: Mission Image */}
        <div className="relative">
          <img
            src={mission}
            alt="Mission"
            className="rounded-xl shadow-lg w-full h-72 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Card */}
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 md:p-8 lg:p-10 relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-[#A02B2D] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxedsm:text-base">
                At Veekites Global Service Limited, we strive to redefine
                excellence in Architectural Design, Civil, Mechanical,
                Electrical, and Building Engineering. Our mission extends beyond
                delivering projects—we aim to empower industries, foster
                sustainable growth, and build infrastructures that stand the
                test of time.
                <br />
                <br />
                Through innovation, integrity, and dedication, we position
                ourselves as a leading force in the technical and supply sectors
                of the millennium, committed to creating a lasting impact in
                every community we serve.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mission;
