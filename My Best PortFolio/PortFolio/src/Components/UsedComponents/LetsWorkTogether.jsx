import React from "react";
import { useNavigate } from "react-router-dom";

function LetsWorkTogether() {
  const Navigate = useNavigate();
  const D = () => {
    Navigate("/contact");
  };
  return (
    <>
      <div onClick={D} >
        <div className="">
          <img
            src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png"
            className="  md:h-20 "
            alt=""
          />
        </div>

        <div className="  flex items-end justify-between ">
          <div>
            <p className="text-slate-200  font-bold font-kodchasan text-[31px] md:text-[40px]  ">
              Let's
            </p>
            <p className="text-slate-200 font-kodchasan font-bold text-[34px]  md:text-[40px] ">
              Work
              <span className="text-blue-700 font-bold md:text-[42px] text-[38px] ">
                together
              </span>
            </p>
          </div>

          <div className=" ">
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
              className=" h-12 w-14  lg:h-16 lg:w-16 opacity-45 "
              alt=""
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default LetsWorkTogether;
