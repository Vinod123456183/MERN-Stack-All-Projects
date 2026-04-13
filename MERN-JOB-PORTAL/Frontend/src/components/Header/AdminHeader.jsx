import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiSettings, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { ThemeContext } from "../../pages/core/ThemeContext";

function AdminHeader() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const navItems = [
    { name: "Jobs", path: "/find-job" },
    { name: "Companies", path: "/messages" },
    { name: "About Us", path: "/hiring" },
    { name: "Contact Us", path: "/community" },
    { name: "FAQ", path: "/faq" },
  ];

  // ✨ Animation for wavy bounce
  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 0) => ({
      opacity: 1,
      y: [10, -4, 0],
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Animated Header Container */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="w-full px-6 md:px-10 py-4 dark:bg-black dark:text-white border-b dark:shadow-sm"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap">
          {/* Left Section (Logo + Toggle) */}
          <motion.div
            custom={0}
            variants={itemVariant}
            className="flex items-center justify-between w-full lg:w-auto"
          >
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-full">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold">LuckyJob</span>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <FiX className="text-xl" />
                ) : (
                  <FiMenu className="text-xl" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Nav Links (Animated as group) */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="hidden lg:flex gap-6 xl:gap-8 text-[13px]"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index + 1}
                variants={itemVariant}
              >
                <Link
                  to={item.path}
                  className="hover:text-blue-500 transition duration-150 font-semibold lg:text-xs"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Right Section */}
          <motion.div
            className="flex items-center gap-4 mt-4 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* Theme Toggle */}
            <motion.div custom={6} variants={itemVariant}>
              <button
                onClick={toggleTheme}
                className="text-xl rounded-full p-2 transition"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </motion.div>

            {/* Location */}
            <motion.div
              custom={7}
              variants={itemVariant}
              className="hidden sm:flex items-center gap-2 text-sm text-gray-400"
            >
              <span>New York, NY</span>
            </motion.div>

            {/* Avatar + Icons */}
            <motion.div
              custom={8}
              variants={itemVariant}
              className="hidden lg:flex items-center gap-4 text-sm"
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <div className="relative cursor-pointer">
                <FiBell className="w-5 h-5 hover:text-blue-600" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </div>
              <FiSettings className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="lg:hidden flex flex-col gap-3 bg-white dark:bg-black px-6 py-4 border-b dark:border-gray-700"
        >
          {navItems.map((item, index) => (
            <motion.div key={item.name} custom={index} variants={itemVariant}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold hover:text-blue-500"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default AdminHeader;
