import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiInstagramLogoThin } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiContactsLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import Header1 from "../components/Header/Header1";
import { ThemeContext } from "../pages/core/ThemeContext";
ThemeContext;
function ContactUSPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header1 />
      <div className="xl:px-20  px-4 flex p-2  md:p-10 pt-4 gap-5 md:pt-14 flex-col lg:flex-row ">
        <div className="  w-full mx-auto lg:w-1/3 font-kodchasan  p-2  h-auto  rounded-3xl">
          <p className=" pt-4  text-[17px] md:text-[20px] lg:text-[24px] font-bold ">
            CONTACT INFO
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.97, delay: 0.2 }}
            className="py-4 p-2"
          >
            <p
              className={`  pb-1 text-[17px] md:text-[18px] lg:text-[19px] ${
                theme === "dark" ? "text-gray-300" : "text-gray-700 "
              } `}
            >
              MAIL US
            </p>
            <div className="flex items-center gap-5">
              <div
                className={`rounded-xl  p-2 md:p-5  dark:bg-[#141514] bg-gray-200 `}
              >
                <IoMailOutline className="h-10 w-10 " />
              </div>
              <div
                className={` text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px]  ${
                  theme === "dark" ? "text-gray-400" : "text-gray-800"
                }`}
              >
                <p className=" ">vinodsinghbarti420@gmail.com</p>
                <p className=" ">insidesoul645@gmail.com</p>
                <p className=" ">devilstriangle420@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.97, delay: 0.2 }}
            className="py-4 p-2"
          >
            <p
              className={`  pb-1 text-[17px] md:text-[18px] lg:text-[19px] ${
                theme === "dark" ? "text-gray-300" : "text-gray-800 "
              } `}
            >
              CONTACT US
            </p>
            <div className="flex items-center gap-5">
              <div
                className={`rounded-xl  p-2 md:p-5  dark:bg-[#141514] bg-gray-200 `}
              >
                <IoMailOutline className="h-10 w-10 " />
              </div>
              <div
                className={` text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px]  ${
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
              >
                <p className=" ">vinodsinghbarti420@gmail.com</p>
                <p className=" ">insidesoul645@gmail.com</p>
                <p className=" ">devilstriangle420@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.97, delay: 0.38 }}
            className=" p-3"
          >
            <p
              className={`  pb-1 text-[17px] md:text-[18px] lg:text-[19px] ${
                theme === "dark" ? "text-gray-300" : "text-gray-800 "
              } `}
            >
              MEET ME
            </p>
            <div className="flex items-center gap-4">
              <div
                className={`rounded-xl  p-2 md:p-5  dark:bg-[#141514] bg-gray-200 `}
              >
                <IoLocationOutline className="h-10 w-10 " />
              </div>
              <div className=" text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] ">
                <p
                  className={`  pb-1 text-md ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800 "
                  } `}
                >
                  Canal Road , Above Om Sai Banquet Hall , Kathgodam , Haldwani.
                </p>
              </div>
            </div>
          </motion.div>

          <div className=" ">
            <motion.h3
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-10 text-[20px] text-start md:text-[24px] lg:text-[25px]  text-gray-700 mb-5 dark:text-gray-300  "
            >
              SOCIAL
              <span className="text-blue-600"> INFO</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.97, delay: 0.38 }}
              className=" mx-auto w-full flex  justify-between items-center  "
            >
              <motion.a
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.97, delay: 0.5 }}
                className="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#171717] rounded-full hover:bg-gray-200  hover:border hover:border-pink-500  hover:text-black font-bold"
                href="https://instagram.com/___12_devin_12___"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiInstagramLogoThin className="hover:text-pink-500 transition-transform m-4 md:m-3 lg:m-5 xl:m-7 rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 transform hover:scale-110 duration-200" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.97, delay: 1 }}
                className="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#171717] rounded-full hover:bg-gray-200  hover:border hover:border-blue-600  hover:text-black font-bold"
                href="https://linkedin.com/in/vinod-barti-339571268"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedin className="transition-transform hover:text-blue-500 m-4 md:m-3 lg:m-5 xl:m-7 rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 transform hover:scale-110 duration-200" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.97, delay: 1.5 }}
                className="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#171717] rounded-full hover:bg-gray-200   hover:text-black font-bold hover:border hover:border-whatsappColor"
                href="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineWhatsapp className="hover:text-whatsappColor transition-transform m-4 md:m-3 lg:m-5 xl:m-7  rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 transform hover:scale-110 duration-200" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="mx-auto w-full lg:w-2/3 p-5 pt-0 gap-10 bg-[#f4f4f4] dark:bg-[#171616] rounded-3xl"
        >
          <div className="flex justify-between md:p-6 p-2">
            <div>
              <p className="text-[22px] md:text-[30px] lg:text-[40px] font-bold font-kodchasan text-black dark:text-white">
                Let's work <span className="text-blue-500">together.</span>
              </p>
            </div>
            <div className="flex items-center -mt-2 xl:-mt-5 justify-center ">
              <img
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
                className="h-14 md:h-14 lg:h-20 "
                alt=""
              />
            </div>
          </div>

          <form
            className="mt-4"
            action="https://formspree.io/f/mvgpeadn"
            method="POST"
          >
            <div className="mb-4">
              <input
                placeholder="Name *"
                className="font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#e5e5e5] dark:bg-[#2b2b2b] text-black dark:text-white"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Email *"
                className="font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#e5e5e5] dark:bg-[#2b2b2b] text-black dark:text-white"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Your Subject *"
                className="font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#e5e5e5] dark:bg-[#2b2b2b] text-black dark:text-white"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message *"
                className="font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#e5e5e5] dark:bg-[#2b2b2b] text-black dark:text-white"
                id="message"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              className="font-kodchasan px-4 md:px-7 font-bold text-[16px] md:text-[16px] w-full p-4 rounded-md transition duration-75 bg-[#0c0c0c] dark:bg-white text-white hover:bg-black   hover:text-white   dark:text-black dark:hover:bg-white dark:hover:text-gray-900"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default ContactUSPage;
