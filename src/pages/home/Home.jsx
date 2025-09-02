import React, { useState, useEffect, useRef  } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
import { FaHandshake, FaRocket } from "react-icons/fa";

// ✅ Custom hook to detect if element is in view
const useIntersection = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // only trigger once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
};

const Home = () => {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useIntersection({ threshold: 0.1 });
  const [ref2, inView2] = useIntersection({ threshold: 0.1 });
  const [ref3, inView3] = useIntersection({ threshold: 0.1 });

  useEffect(() => {
    if (inView1) controls1.start("visible");
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) controls2.start("visible");
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) controls3.start("visible");
  }, [controls3, inView3]);

  const fadeInTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="h-screen relative !-top-21 bg-[url(/src/assets/background_2.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="bg-[#0000009e] h-screen relative">
          <div className="absolute inset-0 overlay">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#454545] w-80 text-white relative top-36 left-[137px] p-8"
            >
              <h2 className="text-2xl font-bold">
                Frank Africa Synergy Limited
              </h2>
              <p className="text-gray-300">
                is an indigenous company incorporated with the Corporate Affairs
                Commission on the 20th of February 2023
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="m-auto w-11/12 md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 pb-8 lg:pt-0 lg:pb-0 lg:relative lg:-top-28">
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={fadeInTop}
        transition={{ duration: 1 }}
        className="p-4 md:p-8 bg-white drop-shadow flex flex-col items-center text-left"
      >
        <FaRocket className="mb-2" size={50} />
        <h1 className="font-semibold text-sm md:text-base lg:text-lg">
          To continuously improve our products and services
        </h1>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInBottom}
        transition={{ duration: 1 }}
        className="p-4 md:p-8 bg-white relative lg:-top-10 drop-shadow flex flex-col items-center text-left"
      >
        <GoBriefcase className="mb-2" size={50} />
        <h1 className="font-semibold text-sm md:text-base lg:text-lg">
          To become the number-one reference for Agricultural, Construction,
          Logistics, Real Estate, Manufacturing, Marketing, Janitorial, etc.
          products and services.
        </h1>
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={fadeInTop}
        transition={{ duration: 1 }}
        className="p-4 md:p-8 bg-white drop-shadow flex flex-col items-center text-left"
      >
        <FaHandshake className="mb-2" size={50} />
        <h1 className="font-semibold text-sm md:text-base lg:text-lg">
          To continuously impact our employees, suppliers, customers, the
          environment, and the communities we work positively while enhancing
          shareholders' value.
        </h1>
      </motion.div>
    </div>
    </>
  );
};

export default Home;
