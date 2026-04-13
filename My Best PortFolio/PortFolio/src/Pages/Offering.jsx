import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaPaintBrush, FaTag, FaLaptopCode } from "react-icons/fa";
import TwoIcons from "../Components/UsedComponents/TwoIcons";
import LetsWorkTogether from "../Components/UsedComponents/LetsWorkTogether";
import Signature from "../Components/UsedComponents/Signature";
import { useNavigate } from "react-router-dom";

const Offering = () => {
  const Navigate = useNavigate();
  const D = () => {
    Navigate("/aboutme");
  };
  return (
    <>
      {/* bg-[#1b1a1a] 161616 */}

      <div className="w-full ">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="flex gap-1 md:gap-3 lg:gap-5 xl:gap-8 items-center justify-center"
        >
          <img
            className="w-[20px] pb-5 md:w-[40px] lg:w-[50px] xl:w-[55px]"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Decorative star"
          />
          <div className="pb-5">
            <p className="text-slate-200 font-kodchasan font-bold text-[25px] uppercase text-nowrap md:text-[50px] lg:text-[80px]">
              Work <span className="text-twitterColor font-bold">Together</span>
            </p>
          </div>
          <img
            className="pb-5 w-[20px] md:w-[40px] lg:w-[50px] xl:w-[55px]"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
            alt="Decorative star"
          />
        </motion.div>
      </div>

      <div className=" font-kodchasan gap-6 p-4 flex flex-col md:flex-row  px-3 md:px-16 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className=" w-full md:w-[40%] bg-card p-4  rounded-3xl bg-[#1b1a1a] "
        >
          <h2 className=" text-gray-400 text-[1.8rem] text-center pt-5 font-bold   mb-6">
            MY OFFERINGS
          </h2>

          <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8 xl:p-10  ">
            <div className="flex items-center text-primary cursor-pointer hover:text-primary-foreground pb-12">
              <FaCamera className="mr-3" style={{ fontSize: "24px" }} />
              <span
                style={{ fontSize: "16px" }}
                className="md:text-lg lg:text-xl xl:text-2xl"
              >
                PHOTOGRAPHY
              </span>
            </div>
            <div className="flex items-center text-primary cursor-pointer hover:text-primary-foreground pb-12">
              <FaPaintBrush className="mr-3" style={{ fontSize: "24px" }} />
              <span
                style={{ fontSize: "16px" }}
                className="md:text-lg lg:text-xl xl:text-2xl"
              >
                WEB DESIGNING
              </span>
            </div>
            <div className="flex items-center text-primary cursor-pointer hover:text-primary-foreground pb-12">
              <FaTag className="mr-3" style={{ fontSize: "24px" }} />
              <span
                style={{ fontSize: "16px" }}
                className="md:text-lg lg:text-xl xl:text-2xl"
              >
                BRANDING
              </span>
            </div>
            <div className="flex items-center text-primary cursor-pointer hover:text-primary-foreground pb-12">
              <FaLaptopCode className="mr-3" style={{ fontSize: "24px" }} />
              <span
                style={{ fontSize: "16px" }}
                className="md:text-lg lg:text-xl xl:text-2xl"
              >
                DEVELOPMENT
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className=" w-full bg-[#1f1e1e] rounded-3xl grid p-6 gap-5 grid-cols-1 xl:grid-cols-2 "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
            className=" rounded-3xl bg-gradient-to-bl from-[#444444]  to-[#161616] p-7 "
          >
            <h3 className="text-xl font-kodchasan text-gray-300 mb-4">
              PHOTOGRAPHY
            </h3>
            <p className=" text-gray-400 text-[15px] ">
              With a deep passion for photography, adept at capturing moments
              with creativity and precision. Specializing in [specific type,
              e.g., portrait, landscape, etc.], skilled at crafting visually
              compelling and impactful images. Each photograph demonstrates a
              sharp eye for detail, expert composition, and a sophisticated
              understanding of lighting.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className=" rounded-3xl bg-gradient-to-bl from-[#444444]  to-[#161616] p-7 "
          >
            <h3 className="text-xl font-kodchasan text-gray-300 mb-4">
              WEB DESIGNING
            </h3>
            <p className=" text-gray-400 text-[15px] ">
              Basic understanding of web design principles, including layout,
              color theory, and user experience. Familiar with creating visually
              appealing and functional web pages using standard design tools and
              frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2 }}
            className=" rounded-3xl bg-gradient-to-bl from-[#444444]  to-[#161616] p-7 "
          >
            <h3 className="text-xl font-kodchasan text-gray-300 mb-4">
              BRANDING
            </h3>
            <p className=" text-gray-400 text-[15px] ">
              Foundational knowledge of branding concepts, focusing on creating
              cohesive and impactful brand identities. Understands the
              importance of visual consistency and messaging to build strong
              brand recognition and engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.4 }}
            className=" rounded-3xl bg-gradient-to-bl from-[#444444]  to-[#161616] p-7 "
          >
            <h3 className="text-xl font-kodchasan text-gray-300 mb-4">
              DEVELOPMENT
            </h3>
            <p className=" text-gray-400 text-[15px] ">
              I have a strong foundation in web development, including
              proficiency in HTML, CSS, and JavaScript. My experience extends to
              Data Structures and Algorithms (DSA), which enhances my
              problem-solving capabilities and coding efficiency. These skills
              enable me to build efficient, user-friendly web applications and
              tackle complex programming challenges.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 w-full mx-auto px-3 md:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="cursor-pointer bg-[#151414] w-full p-4 pt-2 rounded-3xl "
        >
          <TwoIcons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className=" cursor-pointer bg-[#151414] w-full p-4 pt-2 rounded-3xl "
        >
          <LetsWorkTogether />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          onClick={D}
          className="w-full cursor-pointer bg-[#151414]  p-4 pt-2 rounded-3xl"
        >
          <Signature
            text="MORE ABOUT ME"
            subtitle="Credentials"
            imageSrc="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
            iconSrc="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Offering;
