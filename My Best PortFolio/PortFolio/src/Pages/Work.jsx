import React from "react";
import { motion } from "framer-motion";
import WorkR from "../Components/UsedComponents/WorkR";

import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.png";

const Work = () => {
  return (
    <>
      <div className="w-full pt-4">
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

      <div className=" px-3 pt-2 md:pt-9 lg:px-20 w-full  gap-5 md:gap-8 mx-auto grid grid-cols-1 md:grid-cols-3 ">
        <WorkR
          src={i4}
          type="Web Development"
          d="PortFolio"
          smallicon="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg "
        />
        <WorkR
          src={i2}
          type="Web Development"
          d="E-Com  WEbsite"
          smallicon="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
        />

        <WorkR
          src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          type="Web Dev"
          d="Crypto Fetch"
          smallicon="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
        />

        <WorkR
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/divi-travel-website-template.jpg"
          type="Web Development"
          d="Traveling Web"
          smallicon="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
        />

        <WorkR
          src="https://uicookies.com/wp-content/uploads/2020/05/Profile-Card-1024x807.jpg"
          type="Web Development"
          d="Profile Card"
          smallicon="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
        />
        <WorkR
          src="https://uicookies.com/wp-content/uploads/2020/04/Flatter-1024x807.jpg"
          type="Web Development"
          d="Food Web"
          smallicon="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
        />
      </div>
    </>
  );
};

export default Work;
