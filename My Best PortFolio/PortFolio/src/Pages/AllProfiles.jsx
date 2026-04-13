import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  BiLogoFacebook,
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import img from "../assets/C1.jpg";
const AllProfiles = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto font-kodchasan">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="relative bg-deep-green "
        >
          <img
            src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute  inset-0 flex  justify-center top-32 items-center">
            <img
              src={img}
              alt="Profile Picture"
              className=" h-48  rounded-full bg-gradient-to-r from-c47 via-c18 to-c20 p-1"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="text-center mt-20 pb-7"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="text-2xl font-semibold text-foreground text-gray-300"
          >
            Vinod Singh
          </motion.h2>

          <p className="mt-4 text-muted-foreground px-4 text-gray-400">
            Creative designer skilled at turning ideas into striking, effective
            visuals. Dedicated to crafting solutions that captivate and engage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="social-login-icons grid grid-cols-3 md:grid-cols-1 gap-4 p-4"
        >
          <a
            href="tel:7251947890"
            className="  flex justify-center items-center"
          >
            <FaPhoneAlt className="rounded-full bg-blue-700 h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinod-barti-339571268/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <BiLogoLinkedinSquare className="rounded-full bg-[#1d84bb] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://www.geeksforgeeks.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <SiGeeksforgeeks className="rounded-full bg-[#20951c] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://github.com/Vinod123456183"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <FaGithub className="rounded-full bg-[#131313] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <FaWhatsapp className="rounded-full bg-[#25D366] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <BiLogoFacebookSquare className="rounded-full bg-[#1877F2] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <FaTelegram className="rounded-full bg-[#0088CC] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://leetcode.com/Vinod"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <SiLeetcode className="rounded-full bg-[#F6C34A] h-10 w-10 p-2 text-gray-950 transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpRXfPcbJhBLvrNCPbcDzqDjLLjpzsxdWQqWgnDGtrbQcprPxqNTzTTFpZXNSbZhRMflCM"
            className="flex justify-center items-center"
          >
            <BiLogoGmail className="rounded-full bg-[#D93025] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
          <a
            href="https://www.instagram.com/___12_devin_12___/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <FaInstagram className="rounded-full bg-[#E1306C] h-10 w-10 p-2 text-white transition-transform transform hover:scale-105" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProfiles;
