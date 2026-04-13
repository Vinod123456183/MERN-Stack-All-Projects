import React, { useContext, useRef } from "react";
import { FaBriefcase, FaBrain, FaLock } from "react-icons/fa";
import WhyChooseUSBox from "./WhyChooseUSBox";
import { ThemeContext } from "../../../pages/core/ThemeContext";
import { motion, useInView } from "framer-motion";

function WhyChooseUs() {
  const data = [
    {
      icon: <FaBriefcase />,
      title: "Easy Job Access",
      description:
        "Browse thousands of verified  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, veritatis? lorem50 jobs in tech, business, and more. and saves plenty of your time",
    },
    {
      icon: <FaBrain />,
      title: "Skill-Based Matching",
      description:
        "We match you with roles that suit your skills and match you with roles that suit your skills and match you with roles that suit your skills and match you with roles that suit your skills and match you with roles that suit your skills and match you with roles that suit your skills and interests.We match you with roles that suit your skills and interests.",
    },
    {
      icon: <FaLock />,
      title: "Secure Applications",
      description:
        "Your data and applications are protected with top security.We match you with roles that suit your skills and interests.We match you with roles that suit your skills and interests.",
    },
  ];

  const { theme } = useContext(ThemeContext);

  // Ref and inView detection
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // triggers when 30% visible, only once

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-10 "
    >
      <motion.p
        variants={itemVariants}
        className={`text-start font-bold text-2xl md:text-4xl lg:text-5xl pb-6 ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Why Choose Us
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="grid lg:grid-cols-3 gap-4"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <WhyChooseUSBox
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default WhyChooseUs;
