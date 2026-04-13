import React, { useContext, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "../../pages/core/ThemeContext";
import { motion, useInView } from "framer-motion";

function FrontPageUI() {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.4, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <section className="h-auto pt-10 md:pt-14" ref={ref}>
      <motion.div
        className="flex flex-col-reverse px md:flex-row justify-start gap-2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Left: Text Content */}
        <motion.div
          className={`flex-1 space-y-6 text-start md:text-left py-16 rounded-xl font-dm-sans ${
            theme === "dark" ? "graywhite" : "grayblack"
          }`}
          variants={itemVariants}
        >
          <motion.div
            className="text-sm font-semibold text-green-600"
            variants={itemVariants}
          >
            <p className="py-4">BEST JOBS PLACE</p>
            <p className="text-4xl pt-2 md:text-6xl font-semibold leading-tight">
              The Easiest
            </p>
            <p className="text-4xl pt-2 md:text-6xl font-semibold leading-tight">
              Way to Get Your
            </p>
            <p className="text-4xl pt-2 md:text-6xl font-semibold leading-tight">
              New Job
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg pt-2">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 rounded-xl p-3 flex flex-col md:flex-row gap-4 md:gap-2 items-center"
            variants={itemVariants}
          >
            <input
              type="text"
              placeholder="Job title, Company..."
              className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                theme === "dark" ? "text-black" : "text-gray-600"
              }`}
            />
            <div className="flex-1 relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
              Find now
            </button>
          </motion.div>

          <motion.div className="text-lg pt-6" variants={itemVariants}>
            <p>Popular Searches: Designer, Developer, Web, Engineer, Senior,</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="relative z-10 h-full w-full">
            <img
              src="https://superio-reactjs.ibthemespro.com/images/resource/image-2.jpg"
              alt="Person with laptop"
              className="w-[640px] h-auto object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FrontPageUI;
