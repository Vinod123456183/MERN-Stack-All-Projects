import React, { useContext } from "react";
import { ThemeContext } from "../../pages/core/ThemeContext";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className=" page-container  pt-10">
        <footer className="border-t border-gray-300 dark:border-gray-500 pt-6">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-600 dark:text-gray-400 pb-10">
            {/* Logo & description */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-white dark:bg-black p-1 rounded-full">
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </div>
                <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  LuckyJob
                </span>
              </div>
              <p>
                Jobhub is the heart of the design community and the best
                resource to discover and connect with designers and jobs
                worldwide.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-gray-900 dark:text-gray-300 font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {["About us", "Our Team", "Products", "Contact"].map(
                  (item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-purple-600 dark:hover:text-blue-500 transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-gray-900 dark:text-gray-300 font-semibold mb-4">
                Product
              </h4>
              <ul className="space-y-2">
                {["Feature", "Pricing", "Credit", "FAQ"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-purple-600 dark:hover:text-blue-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download */}
            <div>
              <h4 className="text-gray-900 dark:text-gray-300 font-semibold mb-4">
                Download
              </h4>
              <ul className="space-y-2">
                {["iOS", "Android", "Microsoft", "Desktop"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-purple-600 dark:hover:text-blue-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-gray-900 dark:text-gray-300 font-semibold mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                {["Privacy", "Help", "Terms", "FAQ"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-purple-600 dark:hover:text-blue-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-600" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4 text-sm text-gray-600 dark:text-gray-400 ">
            <p className="text-center md:text-left">
              © 2021{" "}
              <span className="font-semibold text-purple-600">LuckyJob</span>.
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaWhatsapp,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-400 dark:border-gray-500 hover:text-black dark:hover:text-white hover:bg-purple-500 flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-16 right-20  w-12 h-12 dark:bg-gray-900 bg-gray-500 rounded-full bg-purple-500 text-white text-lg flex items-center justify-center shadow-md hover:bg-purple-600 transition z-50"
            aria-label="Back to Top"
          >
            ↑
          </button>
        </footer>
      </div>
    </>
  );
};

export default Footer;
