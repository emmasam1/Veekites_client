import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <div className="w-full bg-[#34373C] flex flex-col justify-center items-center">
        <div className="w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-20">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="w-4/5 border-t border-gray-600">
          <div className="m-auto bg-[url('assets/image/footer-bg.jpg')] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">ABOUT</h2>
              <p className="text-gray-300 text-sm font-thin">
                At Veekites Global Services, we are guided by a bold vision to
                provide smarter, more sustainable solutions for Africa and
                beyond.
              </p>
              <motion.button
                className="relative px-10 py-2 border-2 border-red-500 mt-4 overflow-hidden hover:text-white text-white text-sm"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="absolute inset-0 bg-red-500"
                  variants={{
                    rest: { x: "100%" },
                    hover: { x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">
                  <Link to="/about-us">READ MORE</Link>
                </span>
              </motion.button>
            </div>
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">SERVICES</h2>
              <div>
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  Construction →
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  Oil & Gas →
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  Marine Services →
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  Project Management →
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  ICT Training & Solutions →
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  Strategic Procurement →
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  to=""
                  className="text-sm text-red-500 hover:text-white font-thin"
                >
                  Customized cross-industry solutions
                </Link>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">ADDRESS</h2>
              <p className="text-gray-300 text-sm font-thin">
                House 49, O.A.U. Quarters, Close D Kashim Ibrahim Wy, Maitama,
                AMAC 904101, Federal Capital Territory
              </p>
              <p className="text-gray-300 text-sm mt-3 font-thin">
                Official Tel: 09168051180
                <br />
                Official Tel: 080000400400
              </p>
              <p className="text-gray-300 text-sm mt-3 font-thin">
                Official Email: info@veekites.com
                <br />
                Official Gmail: veekites@gmail.com
              </p>
            </div>
            <div className="p-5">
              <h2 className="text-gray-400 font-thin mb-4">CONTACT</h2>
              <form action="">
                <input
                  type="text"
                  name="text"
                  class="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-700 block w-full sm:text-sm  bg-transparent text-gray-300"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="text"
                  class="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-500 block w-full sm:text-sm  bg-transparent text-gray-300"
                  placeholder="Subject"
                />
                <textarea
                  class="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-500 block w-full sm:text-sm  bg-transparent text-gray-300 resize-none"
                  placeholder="Message"
                />
                <motion.button
                  className="relative px-10 py-2 border-2 border-red-500 overflow-hidden hover:text-white text-white text-sm"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <motion.div
                    className="absolute inset-0 bg-red-500"
                    variants={{
                      rest: { x: "100%" },
                      hover: { x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative">SEND</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 border-t border-gray-700">
        <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-center md:text-left text-gray-500">
            &copy; {currentYear} Veekites. All rights reserved. By - D-Unit
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-red-500">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-red-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
