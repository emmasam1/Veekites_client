import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Spin as Hamburger } from "hamburger-react";
import { IoHome } from "react-icons/io5";
import { IoMdCall, IoMdTime } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Framer Motion
import "./Navbar.css";

import logo_small from "../../assets/logo_small.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Motion Variants
  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="bg-[#454545] h-28 hidden sm:block"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-10 flex flex-row justify-between pt-4">
          {/* <div>
            <img src={logo_small} alt="" className="w-40" />
          </div> */}
          <div className="flex flex-row justify-between w-9/11 mx-auto">
            {/* Address */}
            <div className="flex items-center border-r-2 pr-5 border-gray-500">
              <IoHome size={30} className="mr-2 text-gray-300" />
              <div>
                <p className="text-xs text-white font-semibold">
                  D Close, House 49, OAU Quarters,
                </p>
                <p className="text-xs text-white font-semibold">
                  Maitama, Abuja, Nigeria.
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center border-r-2 pr-5 pl-2 border-gray-500">
              <IoMdCall size={30} className="mr-2 text-gray-300" />
              <div>
                <p className="text-xs text-white font-semibold">
                  +234 (0) 916 805 1180, 0800-00-400-400
                </p>
                <p className="text-xs text-gray-300 font-semibold">
                  info@veekites.com
                </p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-center border-r-2 pr-5 pl-2 border-gray-500">
              <IoMdTime size={30} className="mr-2 text-gray-300" />
              <div>
                <p className="text-xs text-white font-semibold">
                  Mon-Fri 8:00-5:00
                </p>
                <p className="text-xs text-gray-300 font-semibold">
                  Sat-Sun CLOSED
                </p>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center border-r-2 pr-5 pl-2 border-gray-500 gap-3">
              <TiSocialFacebook
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <IoLogoTwitter
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <FaInstagram
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <IoLogoLinkedin
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <IoLogoYoutube
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <FaTiktok
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <FaSnapchatGhost
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Nav */}
      <motion.nav
        className={`bg-white z-10 w-full m-auto lg:w-4/5 lg:relative lg:-top-7 ${
          isScrolled ? "fixed top-0 shadow-md" : ""
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo_small} alt="" className="w-40" />
          </Link>

          {/* Hamburger */}
          <div className="relative md:hidden z-20 bg-white">
            <Hamburger toggled={isOpen} toggle={toggleMenu} size={27} />
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 bg-black opacity-50 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={closeMenu}
                />
                {/* Mobile Menu */}
                <motion.div
                  className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-30 shadow-lg md:hidden"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ul className="flex flex-col p-6 space-y-1">
                    <img src={logo_small} alt="" className="w-40 mb-4" />
                    {[
                      { name: "Home", path: "/" },
                      { name: "About Us", path: "/about-us" },
                      { name: "Our Services", path: "/our-services" },
<<<<<<< HEAD
                      { name: "Projects", path: "/out-projects" },
=======
                      { name: "Projects", path: "/our-projects" },
                      { name: "Blog", path: "/blog" },
                      { name: "Contact Us", path: "/contact-us" },
                    ].map((item, i) => (
                      <motion.li key={i} variants={itemVariants}>
                        <Link
                          to={item.path}
                          className={`block py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                            location.pathname === item.path
                              ? "nav-item-active"
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex md:items-center rtl:space-x-reverse"
            initial={false}
            animate={{
              gap: isScrolled ? "1.5rem" : "2rem", // spacing shrinks smoothly
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Our Services", path: "/our-services" },
<<<<<<< HEAD
              { name: "Projects", path: "/out-projects" },
=======
              { name: "Projects", path: "/our-projects" },
              { name: "Blog", path: "/blog" },
              { name: "Contact Us", path: "/contact-us" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                animate={{
                  y: isScrolled ? -2 : 0, // lift slightly when scrolled
                }}
              >
                <Link
                  to={item.path}
                  className={`relative py-2 font-bold text-[#454545] hover:text-green-900 ${
                    location.pathname === item.path ? "nav-item-active" : ""
                  }`}
                >
                  {item.name}
                  <motion.span
                    layoutId="underline"
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                      location.pathname === item.path
                        ? "after-visible"
                        : "after-hidden"
                    }`}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Dark overlay */}
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black opacity-50 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
