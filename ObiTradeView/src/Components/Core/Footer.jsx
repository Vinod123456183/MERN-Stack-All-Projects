import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 text-[10px] lg:text-sm  font-semibold text-gray-500 py-6 pl-4 lg:pl-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="mb-4 md:mb-0">
          © 2025 <span className="text-blue-600">Multipurpose Themes</span>.
          All Rights Reserved.
        </div>

        {/* Right side */}
        <div className="flex items-center text-[10px] lg:text-sm  font-semibold  space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            FAQ
          </Link>
          <span className="text-gray-400">/</span>
          <a
            href="https://www.linkedin.com/in/vinod-barti-339571268/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase Now
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 ml-4 text-gray-500">
            <a
              href="https://instagram.com/v1n0d_0lx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinod-barti-339571268/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://wa.me/9456541392"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="mailto:vinodsinghbarti420@gmail.com"
              className="hover:text-red-500"
            >
              <FiMail size={18} />
            </a>
            <a
              href="https://github.com/Vinod123456183"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
