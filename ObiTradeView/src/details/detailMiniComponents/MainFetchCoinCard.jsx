import React from "react";
import { FaEthereum, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const MainFetchCoinCard = ({
  symbol,
  name,
  current_price,
  price_change_percentage_24h,
  dataArray = [], // Fallback if no data is passed
  icon,
  link,
  low_24h,
  high_24h,
  market_cap_change_percentage_24h,
  ath_change_percentage,
}) => {
  const isPositivePriceChange = Number(price_change_percentage_24h) > 0;
  const isPositiveMarketCapChange =
    Number(market_cap_change_percentage_24h) > 0;
  const isPositiveAthChange = Number(ath_change_percentage) > 0;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0]; // This represents the hovered data point

      return (
        <div className="bg-zinc-900 text-white p-3 rounded shadow text-xs md:text-sm  lg:text-md">
          <div className="font-semibold">{item.payload.name}</div>
          <div>Value: {item.payload.value}</div>
        </div>
      );
    }

    return null;
  };

  return (
    <Link to={link}>
      <div className="bg-gray-50 font-semibold  text-black p-6 rounded-2xl w-full lg:w-[413px] xl:w-full shadow-lg relative overflow-hidden hover:scale-[1.04] duration-300 ">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-5">
            <div className="bg-purple-200 p-1 rounded-md">
              {/* Render custom icon based on prop */}
              <img src={symbol} alt="" className="h-10 w-10 rounded-lg" />
            </div>
            <div>
              <p className="text-xs  lg:text-sm text-gray-900">
                Proof of Stake
              </p>
              <h2 className="text-md font-semibold">
                {name || "Ethereum (ETH)"}
              </h2>
            </div>
          </div>
          <FiArrowUpRight
            className="text-gray-700 rounded-full border-2 p-1 "
            size={30}
          />
        </div>

        <div className="flex gap-2 justify-between">
          {/* Current Price Section */}
          <div className="mb-4">
            <p className="text-xs md:text-sm  lg:text-md font-semibold pb-2 text-gray-900">
              Current Price
            </p>
            <p className="text-xs lg:text-[15px] xl:text-[16px] xl:text-lg 2xl:text-2xl   font-semibold pb-2 text-gray-900">
              ${current_price || "$13.62"}
            </p>
            <p
              className={`text-xs md:text-sm  lg:text-md ${isPositivePriceChange ? "text-green-400" : "text-red-400"}`}
            >
              {isPositivePriceChange ? "▲" : "▼"}{" "}
              <span
                title={`Price Change 24hrs: ${price_change_percentage_24h || "0%"}`}
              >
                {price_change_percentage_24h || "0%"}
              </span>
            </p>
          </div>

          {/* Low 24hrs Section */}
          <div className="mb-4">
            <p className="text-xs md:text-sm  xl:text-md font-semibold pb-2 text-gray-900">
              Low 24hrs
            </p>
            <p className=" text-xs lg:text-[15px] xl:text-[16px] xl:text-lg 2xl:text-2xl  font-semibold pb-2 text-gray-900">
              ${low_24h || "$13.62"}
            </p>
            <p
              className={`text-xs md:text-sm  lg:text-md ${isPositiveMarketCapChange ? "text-green-400" : "text-red-400"}`}
            >
              {isPositiveMarketCapChange ? "▲" : "▼"}{" "}
              <span
                title={`Market Cap Change 24hrs: ${market_cap_change_percentage_24h || "0%"}`}
              >
                {market_cap_change_percentage_24h || "0%"}
              </span>
            </p>
          </div>

          {/* High 24hrs Section */}
          <div className="mb-4">
            <p className="text-xs md:text-sm  lg:text-md font-semibold pb-2 text-gray-900">
              High 24hrs
            </p>
            <p className=" text-xs lg:text-[15px] xl:text-[16px] xl:text-lg 2xl:text-2xl  font-semibold pb-2 text-gray-900">
              ${high_24h || "$13.62"}
            </p>
            <p
              className={`text-xs md:text-sm  lg:text-md ${isPositiveAthChange ? "text-green-400" : "text-red-400"}`}
            >
              {isPositiveAthChange ? "▲" : "▼"}{" "}
              <span
                title={`ATH Change Percentage: ${ath_change_percentage || "0%"}`}
              >
                {ath_change_percentage || "0%"}
              </span>
            </p>
          </div>
        </div>

        {/* Line Chart Section */}
        <div className="h-24 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={
                dataArray.length > 0 ? dataArray : [{ name: "Jan", value: 100 }]
              }
            >
              <XAxis dataKey="name" hide />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "#ddd", strokeDasharray: "5 5" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#8b5cf6",
                  stroke: "white",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6, fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Link>
  );
};

export default MainFetchCoinCard;
