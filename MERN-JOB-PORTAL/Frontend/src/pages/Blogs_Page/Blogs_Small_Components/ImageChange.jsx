import React, { useContext, useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlane,
  FaDumbbell,
  FaLeaf,
  FaRunning,
  FaLaptopHouse,
  FaRobot,
  FaVrCardboard,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../core/ThemeContext";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "The Future of Work: Tech and Remote Trends",
    subtitle:
      "Why 2024 is predicted to be a pivotal year for sports technology.",
    author: "Ethan Caldwell",
    date: "September 29, 2025",
    time: "3 Min Read",
    tags: ["Remote", "Productivity"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    title: "Revolutionizing Fitness with AI",
    subtitle: "Artificial intelligence is changing how we train and compete.",
    author: "Lara Simmons",
    date: "August 14, 2025",
    time: "4 Min Read",
    tags: ["AI", "Fitness"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvb2dsZSUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    title: "Traveling Remotely: New Norms",
    subtitle: "How travel and remote work are becoming one lifestyle.",
    author: "Mark Lee",
    date: "July 2, 2025",
    time: "2 Min Read",
    tags: ["Travel", "Remote", "Lifestyle"],
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661548080414-743d241c05ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Sports Meets Virtual Reality",
    subtitle: "Athletes are training smarter with immersive VR tech.",
    author: "Sofia Alvarez",
    date: "May 5, 2025",
    tags: ["VR", "Sport"],
    time: "5 Min Read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Remote Teams: Thriving or Surviving?",
    subtitle:
      "A deep dive into productivity and well-being in distributed teams.",
    author: "Noah Bennett",
    date: "June 12, 2025",
    time: "3 Min Read",
    tags: ["Remote", "Productivity"],
  },
];

const filterContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const filterButtonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const tagIcons = {
  AI: <FaRobot className="text-purple-500" />,
  Remote: <FaLaptopHouse className="text-blue-600" />,
  Fitness: <FaDumbbell className="text-red-500" />,
  Lifestyle: <FaLeaf className="text-green-500" />,
  Productivity: <FaRegClock className="text-yellow-500" />,
  Travel: <FaPlane className="text-sky-500" />,
  Sport: <FaRunning className="text-orange-500" />,
  VR: <FaVrCardboard className="text-pink-500" />,
};

const fadeSlideVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const buttonHover = {
  scale: 1.1,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#000",
  transition: { duration: 0.3 },
};

function ImageChange() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const {
    image,
    title,
    subtitle,
    author,
    date,
    tags = [],
    time,
  } = slides[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const allTags = [...new Set(slides.flatMap((slide) => slide.tags || []))];
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className="page-container relative  px-6 md:px-16 rounded-xl overflow-hidden min-h-[36rem] max-h-[38rem] xl:h-[36rem] flex flex-col justify-between text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top Tags and Read Time */}
        <motion.div
          className="flex justify-between items-start pt-12 z-10 relative"
          key={`tags-${current}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 border border-white text-xs md:text-sm rounded-full font-medium bg-black bg-opacity-40 flex items-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {tagIcons[tag] || null} {tag}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="bg-white text-black text-xs md:text-sm px-3 py-1 rounded-full flex items-center gap-1"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <FiClock />
            {time}
          </motion.div>
        </motion.div>

        {/* Slide Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex-1 flex flex-col justify-center gap-2 z-10 relative"
            variants={fadeSlideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm text-gray-300">
              <span className="font-semibold text-white">{author}</span> on{" "}
              {date}
            </p>
            <p className="text-2xl md:text-3xl font-bold leading-snug text-white select-text">
              {title}
            </p>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl select-text">
              {subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer mt-4 bg-white text-black px-5 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition w-fit"
            >
              Discover More
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex items-center justify-between z-10 pointer-events-none">
          <motion.button
            onClick={prevSlide}
            className="bg-black bg-opacity-70 text-white p-2 rounded-full pointer-events-auto"
            whileHover={buttonHover}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="bg-black bg-opacity-70 text-white p-2 rounded-full pointer-events-auto"
            whileHover={buttonHover}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
      {/* Filters Section */}
      <div className="flex flex-col mx-auto py-4  items-center justify-center">
        <p
          className={`py-2  text-3xl font-medium ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Filter by Tags
        </p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 p-4 rounded-xl lg:max-w-96 lg:min-w-[600px]"
          variants={filterContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              className={`p-1 px-5  text-xs rounded-xl border  transition flex  items-center gap-2 ${
                theme === "dark"
                  ? "border-gray-500 text-gray-300"
                  : "border-gray-500 text-gray-800"
              } `}
              variants={filterButtonVariants}
            >
              {tagIcons[tag] || null} {tag}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default ImageChange;
