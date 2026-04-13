import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import TwoIcons from "../Components/UsedComponents/TwoIcons";
import Signature from "../Components/UsedComponents/Signature";
import LetsWorkTogether from "../Components/UsedComponents/LetsWorkTogether";
import WorkTogether from "../Components/UsedComponents/WorkTogether";

import img from "../assets/MYNEW2.png"; // Corrected import

const fadeIn = {
  initial: { opacity: 0, scale: 0.2 },
  animate: { opacity: 1, scale: 1 },
};

const InfoCard = ({ title, subtitle }) => (
  <motion.div
    initial={fadeIn.initial}
    animate={fadeIn.animate}
    transition={{ duration: 1.4 }}
    className="flex flex-col w-full px-6 p-10 mx-auto rounded-3xl bg-[#151414] items-start"
  >
    <p className="text-gray-300 pb-3 uppercase text-[14px] md:text-[16px] lg:text-[19px] font-bold font-kodchasan">
      {title}
    </p>
    {subtitle.map((sub, index) => (
      <React.Fragment key={index}>
        <p className="text-gray-500 pb-2 uppercase text-[12px] md:text-[14px] lg:text-[15px] font-bold font-kodchasan">
          {sub.year}
        </p>
        <p className="text-gray-300 pt-3 capitalize text-[14px] md:text-[16px] lg:text-[19px] font-bold font-kodchasan">
          {sub.projectTitle}
        </p>
        <p className="text-gray-500 pt-1 capitalize text-[12px] md:text-[14px] lg:text-[15px] font-bold font-kodchasan">
          {sub.details}
        </p>
      </React.Fragment>
    ))}
  </motion.div>
);

function About() {
  const experienceData = [
    {
      year: "2022 - 2026",
      projectTitle: "Mini + Major Projects",
      details: "Web Development and ML",
    },
    {
      year: "2022 - 2026",
      projectTitle: "Ecom Web + More ....",
      details: "Based on web dev..",
    },
  ];

  const educationData = [
    {
      year: "2007 - 2020 (Covid Batch)",
      projectTitle: "Schooling",
      details: "St Paul's Sr Sec School Haldwani",
    },
    {
      year: "2022 - 2026",
      projectTitle: "Bachelor's Of Technology",
      details: "Graphic Era Hill University (Bhimtal)",
    },
  ];

  return (
    <>
      <div className="flex px-3 xl:px-16 gap-4 flex-col xl:flex-row p-6">
        <motion.div
          {...fadeIn}
          transition={{ duration: 1.4 }}
          className="lg:w-[50%] mx-auto flex items-center p-6 rounded-2xl bg-[#121212] justify-center"
        >
          <img
            src={img}
            className="w-[400px] rounded-2xl bg-gradient-to-r from-[#b186ff] via-[#26a8ff] to-[#43a4ff]"
            alt="About"
          />
        </motion.div>

        <div className="w-full">
          <motion.div
            {...fadeIn}
            transition={{ duration: 1.4 }}
            className="flex gap-4 pb-4 md:pb-6 items-center justify-center"
          >
            <img
              className="w-[20px] md:w-[40px] lg:w-[50px] xl:w-[55px]"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
            />
            <p className="text-slate-200 font-kodchasan font-bold text-[24px] uppercase text-nowrap md:text-[45px] lg:text-[60px]">
              Work <span className="text-blue-500 font-bold">Together</span>
            </p>
            <img
              className="w-[20px] md:w-[40px] lg:w-[50px] xl:w-[55px]"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
            />
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 1.3 }}
            className="flex items-end justify-between rounded-2xl w-full mx-auto bg-[#151414]"
          >
            <WorkTogether />
          </motion.div>
        </div>
      </div>

      <div className="flex px-3 lg:px-16 gap-5 flex-col md:flex-row">
        <InfoCard title="Experience" subtitle={experienceData} />
        <InfoCard title="Education" subtitle={educationData} />
      </div>

      <motion.div
        {...fadeIn}
        transition={{ duration: 1.4 }}
        className="pt-4 flex w-full gap-3 flex-col md:flex-row items-center mb-4 mx-auto px-3 lg:px-16"
      >
        <Link to="/allprofiles" className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="w-full p-2 rounded-2xl bg-[#151414]"
          >
            <TwoIcons />
          </motion.div>
        </Link>

        <Link to="/contact" className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 1.4 }}
            className="bg-[#151414] p-2 pl-4 pr-4 rounded-2xl"
          >
            <LetsWorkTogether />
          </motion.div>
        </Link>

        <Link to="/aboutme" className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 1.8 }}
            className="rounded-2xl p-2 bg-[#151414]"
          >
            <Signature
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ duration: 1.4 }}
              text="MORE ABOUT ME"
              subtitle="Credentials"
              imageSrc="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
              iconSrc="https://wpriverthemes.com/landing/gridx/wp-content/assets/images/icon.svg"
            />
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}

export default About;
