import React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function DashBoardCard1({
  coinLogo,
  plusOrMinus,
  coinName,
  coinShortName,
  coinPrice,
  route,
}) {
  const isPositive = Number(plusOrMinus) >= 0;

  return (
    <div>
      <Link to={`${route}`} className="cursor-pointer">
        <div className="relative w-full bg-white rounded-lg fullborder p-6 space-y-4 transition-all transform hover:scale-105 duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-4">
            {/* Coin Logo */}
            <div
              className={`${isPositive ? "bg-green-200" : "bg-red-200"} rounded-md p-2`}
            >
              <img
                src={coinLogo}
                alt={coinName}
                className="h-9 w-9 rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-md lg:text-lg font-semibold text-gray-800">
                {coinName.length > 10
                  ? `${coinName.slice(0, 16)}...`
                  : coinName}
              </h3>

              <p className="text-gray-500 text-sm">{coinShortName}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="pb-1 flex items-center gap-2">
                <div
                  className={`inline-flex items-center gap-1 ${
                    isPositive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-500"
                  } text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-semibold rounded-xl px-3 py-1 w-max`}
                >
                  {isPositive ? `+${plusOrMinus}%` : `${plusOrMinus}%`}
                </div>
                <div>
                  {isPositive ? (
                    <FiArrowUpRight
                      size={26}
                      className=" text-white text-xs md:text-md lg:text-lg bg-green-400 rounded-full p-1"
                    />
                  ) : (
                    <FiArrowDownRight
                      size={26}
                      className="text-white text-xs md:text-md lg:text-lg bg-red-500 rounded-full p-1"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xl  lg:text-2xl font-semibold text-gray-800">
                  {coinPrice}
                </span>
              </div>
            </div>

            <div>
              <svg
                width="100"
                height="67"
                viewBox="0 0 80 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20 Q10 15 20 35 T40 12 T60 15 T80 5"
                  stroke={isPositive ? "#22c55e" : "#ef4444"} // green or red
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
                <defs>
                  <filter id="glow" x="0%" y="0%" width="100%" height="100%">
                    <feDropShadow
                      dx="0"
                      dy="10"
                      stdDeviation="5"
                      floodColor={isPositive ? "#22c55e" : "#ef4444"}
                      floodOpacity="0.7"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DashBoardCard1;
