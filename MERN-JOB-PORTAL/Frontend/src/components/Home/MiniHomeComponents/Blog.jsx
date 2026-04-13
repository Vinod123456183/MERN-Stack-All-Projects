import React, { useContext, useRef } from "react";
import BlogBox from "./BlogBox";
import { ThemeContext } from "../../../pages/core/ThemeContext";
import { motion, useInView } from "framer-motion";

function Blog() {
  const { theme } = useContext(ThemeContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.6,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="pt-5"
    >
      <motion.div
        className="flex items-center justify-between"
        variants={itemVariants}
      >
        <p
          className={`text-start font-bold text-2xl md:text-4xl lg:text-5xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          From Blog
        </p>

        <button
          className={`border border-gray-300 rounded-lg px-3 py-2 lg:px-5 lg:py-3 text-[10px] lg:text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
        >
          View More
        </button>
      </motion.div>

      {/* Animate BlogBox as well */}
      <motion.div variants={itemVariants} className="mt-6">
        <BlogBox />
      </motion.div>
    </motion.div>
  );
}

export default Blog;
