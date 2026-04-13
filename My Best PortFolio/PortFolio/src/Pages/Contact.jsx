import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiInstagramLogoThin } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiContactsLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  return (
    <div className="xl:px-20  px-4 flex p-2  md:p-10 pt-4 gap-5 md:pt-20 flex-col lg:flex-row ">
      <div className="  w-full mx-auto lg:w-1/3 font-kodchasan  p-2  h-auto  rounded-3xl">
        <h2 className=" pt-4  text-[17px] md:text-[20px] lg:text-[24px] font-bold ">
          CONTACT INFO
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.97, delay: 0.2 }}
          className="mt-2 p-2"
        >
          <h3 className="  text-gray-200 pb-1 text-[17px] md:text-[18px] lg:text-[19px] ">
            MAIL US
          </h3>
          <div className="flex items-center gap-5">
            <div className="rounded-xl  p-2 md:p-5  bg-[#141514] ">
              <IoMailOutline className="h-10 w-10 " />
            </div>
            <div className=" text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px]">
              <p className=" text-gray-400">vinodsinghbarti420@gmail.com</p>
              <p className=" text-gray-400">insidesoul645@gmail.com</p>
              <p className=" text-gray-400">devilstriangle420@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.97, delay: 0.3 }}
          className=" p-3"
        >
          <h3 className="pb-2  text-gray-200 text-[17px] md:text-[18px] lg:text-[19px] ">
            Contact US
          </h3>
          <div className="flex items-center gap-4">
            <div className="rounded-xl  p-2 md:p-5  bg-[#141514]">
              <RiContactsLine className="h-10 w-10 " />
            </div>
            <div className="  text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] ">
              <p className=" text-gray-400">+918439371949</p>
              <p className=" text-gray-400">+919456541392</p>
              <p className=" text-gray-400">+917251841949</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.97, delay: 0.38 }}
          className=" p-3"
        >
          <h3 className="pb-2  text-gray-200 text-[17px] md:text-[18px] lg:text-[19px] ">
            Location
          </h3>
          <div className="flex items-center gap-4">
            <div className="rounded-xl  p-2 md:p-5  bg-[#141514]">
              <IoLocationOutline className="h-10 w-10 " />
            </div>
            <div className=" text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] ">
              <p className=" text-gray-400">
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
            className="pt-10 text-[17px] md:text-[20px] lg:text-[25px] text-center  text-gray-400 mb-5"
          >
            SOCIAL
            <span className="text-blue-500"> INFO</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.97, delay: 0.38 }}
            className=" mx-auto w-full flex  justify-between items-center  "
          >
            <motion.NavLink
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.97, delay: 0.5 }}
              className=" bg-[#171717] hover:bg-gray-200  rounded-full  text-gray-300 hover:text-black font-bold "
              to="___12_devin_12___"
            >
              <PiInstagramLogoThin className="  transition-transform    m-4 md:m-3 lg:m-5 xl:m-7  rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10  xl:h-11 xl:w-11 transform hover:scale-110 duration-200" />
            </motion.NavLink>

            <motion.NavLink
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.97, delay: 1 }}
              className=" bg-[#171717]   rounded-full  hover:bg-gray-200  text-gray-300 hover:text-black font-bold"
              to="in/vinod-barti-339571268"
            >
              <TiSocialLinkedin className="transition-transform    m-4 md:m-3 lg:m-5 xl:m-7  rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10  xl:h-11 xl:w-11 transform hover:scale-110 duration-200" />
            </motion.NavLink>

            <motion.NavLink
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.97, delay: 1.5 }}
              className="text-gray-300 bg-[#171717]   rounded-full hover:bg-gray-200   hover:text-black font-bold"
              to="https://api.whatsapp.com/send?phone=919456541392&text=%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F%F0%9F%95%89%EF%B8%8F"
            >
              <MdOutlineWhatsapp className="transition-transform    m-4 md:m-3 lg:m-5 xl:m-7  rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10  xl:h-11 xl:w-11 transform hover:scale-110 duration-200" />
            </motion.NavLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className=" mx-auto   w-full lg:w-2/3 p-5 pt-0 gap-10 bg-[#171616]  rounded-3xl  "
      >
        <div className="flex justify-between md:p-6 p-2 ">
          <div>
            <p className="text-[22px] md:text-[30px] lg:text-[40px] font-bold font-kodchasan ">
              Let's work <span className="text-blue-500">together.</span>
            </p>
          </div>
          <div className=" flex items-center -mt-2   xl:-mt-5   justify-center ">
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
              className=" h-14 md:h-14 lg:h-20 "
              alt=""
            />
          </div>
        </div>

        <form
          className="mt-4"
          action="https://formspree.io/f/mvgpeadn"
          method="POST"
        >
          {" "}
          {/* Added action to form */}
          <div className="mb-4">
            <input
              placeholder="Name * "
              className=" font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#2b2b2b]"
              type="text"
              id="name"
              name="name" // Added name attribute for form data
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email * "
              className=" font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#2b2b2b]"
              type="email"
              id="email"
              name="email" // Added name attribute for form data
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Your Subject * "
              className=" font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#2b2b2b]"
              id="subject"
              name="subject" // Added name attribute for form data
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message * "
              className=" font-kodchasan px-4 md:px-7 text-[15px] md:text-[16px] w-full p-4 md:p-5 rounded-2xl bg-[#2b2b2b]"
              id="message"
              name="message" // Added name attribute for form data
              rows="6"
              required
            ></textarea>
          </div>
          <button
            placeholder="Your Subject * "
            className=" font-kodchasan px-4 md:px-7 font-bold text-[16px]  md:text-[16px] w-full p-4 rounded-md hover:bg-white-ish transition duration-75 hover:text-gray-700 bg-[#2b2b2b]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
