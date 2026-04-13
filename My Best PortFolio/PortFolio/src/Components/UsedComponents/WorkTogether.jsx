import React from "react";

function WorkTogether() {
  return (
    <>
      <div className="flex  justify-center flex-col">
        <div className="px-8 ">
          <img
            src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png"
            className="h-14"
            alt=""
          />
        </div>
        <div className="p-5 pt-3">
          <p className=" text-slate-200 font-kodchasan font-bold text-[24px]  md:text-[40px] ">
            Work <span className="text-blue-500 font-bold "> Together </span>{" "}
          </p>
          <div className="flex flex-col items-end">
            <div>
              <p className=" text-[12px]  text-wrap lg:text-[17px] text-gray-500">
                I am a Indian-based Aspiring web developer with foundational
                skills in creating dynamic and user-friendly websites. Eager to
                apply and expand these skills through practical experience and
                dedicated learning.
              </p>
            </div>
            <div className="">
              <img
                src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
                alt=""
                className="h-8 w-8 md:h-11 md:w-11 text-gray-500 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkTogether;
