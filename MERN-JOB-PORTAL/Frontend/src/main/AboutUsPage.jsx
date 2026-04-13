import React, { useContext } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import Header1 from "../components/Header/Header1";
import img from "./../assets/AI.png";
import img2 from "./../assets/anthony-tuil-lS_eDob6DDg-unsplash.jpg";
import { ThemeContext } from "../pages/core/ThemeContext";

function AboutUsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header1 />

      <div className="page-container">
        <div
          className={` pt-6 xl:pt-8 w-full h-screen flex flex-col xl:flex-row items-center xl:items-start ${
            theme === "dark"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {/* Left Column (Text + Socials) */}
          <div className="w-full xl:w-1/2 px-4 md:px-6 xl:px-10 space-y-4 mb-8 xl:mb-0 relative xl:absolute">
            <p className="text-4xl sm:text-6xl xl:text-[90px] font-expletus tracking-tight leading-tight xl:leading-[100px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 block">
                I REALLY <br /> LOVE TO <br /> TALK WITH <br /> PEOPLE <br />
                <span className="text-2xl sm:text-4xl xl:text-[70px] font-signature tracking-wider font-thin ">
                  Vinod Singh Barti
                </span>
              </span>
            </p>

            <div className="">
              <h4 className="text-base font-semibold pb-2">Follow Me On</h4>
              <div className="flex flex-wrap gap-2 text-2xl text-gray-800 dark:text-gray-200">
                <a
                  href="https://capable-griffin-321a17.netlify.app/"
                  className="hover:text-blue-500 transition p-2 rounded-full border border-gray-500  hover:border-blue-600"
                  target="_blank"
                >
                  <FaRegCircleUser />
                </a>
                <a
                  href="https://www.linkedin.com/in/vinod-barti-339571268/"
                  className="hover:text-blue-600 transition p-2 rounded-full border border-gray-500  hover:border-blue-600"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:vinodsinghbarti420@gmail.com"
                  className="hover:text-red-600 transition p-2 rounded-full border border-gray-500  hover:border-red-600"
                  target="_blank"
                >
                  <BiLogoGmail />
                </a>
                <a
                  href="https://github.com/Vinod123456183"
                  className="hover:text-black dark:hover:text-white transition p-2 rounded-full border border-gray-500 dark:hover:border-gray-300"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919456541392"
                  className="hover:text-whatsappColor transition p-2 rounded-full border border-gray-500   dark:hover:border-whatsappColor"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="#"
                  className="hover:text-pink-600 transition p-2 rounded-full border border-gray-500  hover:border-pink-600"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full xl:w-[100%] px-4 sm:px-6 xl:px-0 xl:pl-[320px] ">
            <div className="w-full h-[300px] sm:h-[400px] xl:h-[580px] overflow-hidden shadow-xl">
              <img
                src={img2}
                alt="Vinod"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="py-10  flex flex-col xl:flex-row gap-6 items-center xl:justify-end ">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="w-full sm:max-w-md xl:max-w-[435px]  dark:shadow-gray-700 p-4 rounded-md bg-white dark:bg-[#1a1a1a]"
            >
              <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
                <p>
                  Libero sunt magni eius omnis id veritatis molestias exped
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, dolorem?
                </p>
                <div className="pt-3 border-t border-gray-400  flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 uppercase text-[11px]">
                      Created By
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white">
                      Vinod Singh Barti
                    </p>
                  </div>
                  <div>
                    <img
                      src={img}
                      alt="author"
                      className="h-9 w-9 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
