import React from "react";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../../assets/MYNEW1.png";

function NameDetails() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="md:gap-2  xl:gap-4 flex flex-col ssm:flex-row  md:pt-5 md:pb-5  xl:pt-1 xl:pb-1">
        <div className=" md:w-[300px] xl:w-[320px] flex rounded-3xl items-center justify-center  bg-gradient-to-r from-[#b186ff] via-[#26a8ff] to-[#43a4ff]">
          <img src={img} alt="" className=" rounded-3xl " />
        </div>

        <div className="  flex flex-col  justify-center ">
          <p className="text-gray-500 text-[14px] lg:text-[16px] uppercase ">
            A Web Developer
          </p>
          <p className="text-gray-400 text-[25px]  md:text-[34px] lg:text-[38px]  ">
            Vinod
          </p>

          <p className="text-gray-400 text-[27px] md:text-[30px]  lg:text-[40px]  ">
            Singh
          </p>
          <p className="text-gray-500 text-[9px] md:text-[11px]  lg:text-[13px] uppercase font-semibold">
            I am a web developer based in India
          </p>
        </div>

        <div className="  flex items-end  justify-end">
          <img
            src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
            className=" h-12 w-14 lg:h-20 lg:w-20 opacity-45"
            alt="Gray Icon"
          />
        </div>
      </div>
    </>
  );
}

export default NameDetails;
