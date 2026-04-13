import React from "react";
// import { FaGithub, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa"; // Import the icons from react-icons
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon

import { FiCamera } from "react-icons/fi";
import {
  PiPencilCircleLight,
  PiCirclesThreePlusLight,
  PiUserRectangle,
} from "react-icons/pi";

function MultipleIcons() {
  return (
    <>
      <div className="flex p-9  items-center justify-center gap-6  lg:gap-10 xl:gap-32  ">
        <div className="p-[8px] rounded-full ">
          <FiCamera className="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer hover:text-gray-700 transition duration-200  " />
        </div>
        <div className="p-[8px] rounded-full ">
          <PiPencilCircleLight className="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer hover:text-gray-700 transition duration-200  " />
        </div>
        <div className="p-[8px] rounded-full ">
          <PiCirclesThreePlusLight className="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer hover:text-gray-700 transition duration-200  " />
        </div>
        <div className="p-[8px]  rounded-full ">
          <PiUserRectangle className="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer hover:text-gray-700 transition duration-200  " />
        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col ">
          <p className=" text-[16px]  font-semibold mb-1 uppercase  text-gray-200 ">
            Specialization
          </p>
          <p className=" text-[13px]  font-semibold text-gray-400">
            Services Offering
          </p>
        </div>

        <div className="">
          <img
            src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
            alt=""
            className="w-12 bg-deep- h-12 opacity-45"
          />
        </div>
      </div>
    </>
  );
}

export default MultipleIcons;
