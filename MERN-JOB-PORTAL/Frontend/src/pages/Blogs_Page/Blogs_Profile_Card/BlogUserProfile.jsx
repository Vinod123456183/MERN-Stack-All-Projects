import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ThemeContext } from "../../core/ThemeContext";

function BlogUserProfile({
  bloguserImage,
  bloguserName,
  bloguserFancyName,
  bloguserSomethingAboutUser,
  bloguserCity,
  bloguserCountry,
  bloguserGithubLink,
  bloguserInstaLink,
  bloguserWhatsappLink,
  bloguserTwitterLink,
  bloguserPortfolioLink,
}) {
  const iconWave = {
    rotate: [0, 15, -15, 15, -15, 0],
    transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
  };

  const base = {
    initial: { opacity: 0, scale: 0.4 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  const { theme } = useContext(ThemeContext);

  const socialLinks = [
    {
      href: bloguserGithubLink,
      icon: <FaGithub size={24} />,
      hoverColor: "hover:text-black dark:hover:text-white",
    },
    {
      href: bloguserWhatsappLink,
      icon: <FaWhatsapp size={24} />,
      hoverColor: "hover:text-green-500",
    },
    {
      href: bloguserInstaLink,
      icon: <FaInstagram size={24} />,
      hoverColor: "hover:text-pink-600",
    },
    {
      href: bloguserTwitterLink,
      icon: <FaXTwitter size={24} />,
      hoverColor: "hover:text-blue-400",
    },
    {
      href: bloguserPortfolioLink,
      icon: <FaGlobe size={24} />,
      hoverColor: "hover:text-blue-500",
    },
  ];

  return (
    <motion.div
      className={`bg-white dark:bg-[#1a1a1a] border shadow-md hover:shadow-lg p-4 rounded-lg max-w-full w-full h-auto min-h-[350px] max-h-[450px] transition-colors duration-500 ${
        theme === "dark" ? "border-gray-600" : "border-gray-300"
      }`}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title */}
      <motion.p
        className={`font-semibold text-lg pb-2 border-b ${
          theme === "dark"
            ? "border-gray-200 text-gray-300"
            : "text-gray-500 border-gray-300"
        }`}
        {...base}
        transition={{ ...base.transition, delay: 0.1 }}
      >
        About
      </motion.p>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-3">
        <motion.img
          src={bloguserImage}
          alt={bloguserName || "User Image"}
          className="h-14 w-14 rounded-full object-cover border "
          {...base}
          transition={{ ...base.transition, delay: 0.2 }}
        />
        <div>
          <motion.p
            className="font-medium text-base dark:text-white"
            {...base}
            transition={{ ...base.transition, delay: 0.3 }}
          >
            {bloguserName}
          </motion.p>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400"
            {...base}
            transition={{ ...base.transition, delay: 0.4 }}
          >
            {bloguserFancyName} Blogger
          </motion.p>
        </div>
      </div>

      {/* About Text */}
      <motion.p
        className={`pt-4 text-sm   leading-relaxed ${
          theme === "dark" ? "dark:text-gray-400" : "dark:text-gray-800"
        } `}
        {...base}
        transition={{ ...base.transition, delay: 0.5 }}
      >
        {bloguserSomethingAboutUser}
      </motion.p>

      {/* Location */}
      <motion.div
        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm pt-5"
        {...base}
        transition={{ ...base.transition, delay: 0.6 }}
      >
        <FaMapMarkerAlt size={18} />
        <span>
          {bloguserCity}, {bloguserCountry}
        </span>
      </motion.div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 pt-6 text-gray-700 dark:text-gray-300">
        {socialLinks
          .filter(({ href }) => !!href)
          .map(({ href, icon, hoverColor }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${hoverColor} transition duration-100`}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
              whileHover={iconWave}
            >
              {icon}
            </motion.a>
          ))}
      </div>
    </motion.div>
  );
}

export default BlogUserProfile;
