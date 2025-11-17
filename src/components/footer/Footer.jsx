import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { message } from "antd";
import emailjs from "emailjs-com";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      name: formData.name,
      email: "Website Footer Form", // optional label
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    };

    emailjs
      .send(
        "service_gozwykh",
        "template_g69q20z",
        templateParams,
        "EsTzN-dWRv49434Ne"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          message.success("Message sent successfully!");
          setFormData({ name: "", subject: "", message: "" }); // ✅ clear form
        },
        (err) => {
          console.error("FAILED...", err);
          message.error("Failed to send message. Try again later.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="bg-[#34373C]">
      <div className="w-11/12 mx-auto">
        <div className="bg-[#34373C] flex flex-col justify-center items-center">
          <div className="w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-20">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="border-t border-gray-600">
            <div className="m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* ABOUT */}
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

              {/* SERVICES */}
              <div className="p-5">
                <h2 className="text-gray-400 font-thin mb-4">SERVICES</h2>
                {[
                  "Construction →",
                  "Oil & Gas →",
                  "Marine Services →",
                  "Project Management →",
                  "ICT Training & Solutions →",
                  "Strategic Procurement →",
                  "Customized cross-industry solutions",
                ].map((service, index) => (
                  <div key={index} className="mt-2">
                    <Link
                      to=""
                      className="text-sm text-red-500 hover:text-white font-thin"
                    >
                      {service}
                    </Link>
                  </div>
                ))}
              </div>

              {/* ADDRESS */}
              <div className="p-5">
                <h2 className="text-gray-400 font-thin mb-4">ADDRESS</h2>
                <p className="text-gray-300 text-sm font-thin">
                  House 49, O.A.U. Quarters, Close D Kashim Ibrahim Way, Maitama,
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

              {/* CONTACT FORM */}
              <div className="p-5">
                <h2 className="text-gray-400 font-thin mb-4">CONTACT</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-700 block w-full sm:text-sm bg-transparent text-gray-300"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-500 block w-full sm:text-sm bg-transparent text-gray-300"
                    placeholder="Subject"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mb-4 px-3 py-2 border shadow-sm border-gray-500 placeholder-slate-400 focus:outline-none focus:border-red-500 block w-full sm:text-sm bg-transparent text-gray-300 resize-none"
                    placeholder="Message"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="relative px-10 py-2 border-2 border-red-500 overflow-hidden hover:text-white text-white text-sm"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    disabled={sending}
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
                      {sending ? "Sending..." : "SEND"}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 border-t border-gray-700">
        <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-center md:text-left text-gray-500">
            &copy; {currentYear} Veekites. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-red-500">
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-red-500"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
