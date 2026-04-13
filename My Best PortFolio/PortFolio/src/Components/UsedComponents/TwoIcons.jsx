import React from "react";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TwoIcons() {
  const Navigate = useNavigate();
  const G = () => {
    Navigate("/allprofiles");
  };
  return (
    <>
      <div
        onClick={G}
        className="cursor-not-allowed flex  flex-col  items-center w-full  bg-[#151414] rounded-2xl"
      >
        <div className="w-full bg-dark-slat flex items-center p-4  flex-col ">
          <div className=" flex flex-col gold w-full ">
            <div className="   bg-[#151414]  border-2  w-auto gap-8 md:gap-9 p-4   mx-auto  flex border-slate-600 items-center justify-center rounded-[40px] ">
              <div className=" rounded-full bg-[#151514]  hover:bg-black">
                <Link
                  to="https://github.com/Vinod123456183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-11 w-11 p-2 lg:h-16 lg:w-16 " />
                </Link>
              </div>

              <div className=" rounded-full   bg-[#151514] text-blue-600">
                <Link
                  to="https://www.linkedin.com/in/vinod-barti-339571268/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrLinkedin className=" h-11 w-11 p-2 lg:h-16 lg:w-16  " />
                </Link>
              </div>
            </div>

            <div className=" w-full  flex justify-between pb-2 p-4  items-center ">
              <div className="font-kodchasan w-full">
                <p className="text-gray-500 text-[10px] lg:text-[11px]">
                  STAY WITH ME{" "}
                </p>
                <p className="text-gray-400 text-[15px] lg:text-[17px]">
                  Profiles
                </p>
              </div>
              <div>
                <img
                  src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
                  className=" w-12 bg-deep- h-12 opacity-45"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoIcons;
