import React from "react";

function RightLogo({
  image,
  coinFullName,
  coinShortName,
  price,
  priceCurrency,

  priceChangePercent,
  high24hr,
  least24,
  price_change_percentage_24h,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg text-start lg:w-80 h-auto">
      <div className="flex items-center mb-4 gap-2">
        <div className="p-1  w-[25%]">
          <img src={image} alt="" className="h-10 w-10 rounded-lg" />
        </div>
        <div className="w-full">
          <h3 className="font-semibold text-md text-wrap text-gray-800">
            {(coinShortName || "N/A").split(" ").slice(0, 4).join(" ")}
          </h3>
          <p className="text-sm text-gray-500 ">{coinFullName || "Unknown"}</p>
        </div>
      </div>

      <div className="flex justify-between flex-col items-start my-4">
        <div className="flex items-baseline gap-1">
          <h2 className="text-2xl  font-semibold text-gray-800">
            $ {price != null ? price.toLocaleString("en-US") : "N/A"}
          </h2>
          <span className="text-md text-gray-800 font-semibold">
            {priceCurrency || ""}
          </span>
        </div>
        <div
          className={`flex items-center text-xs  lg:text-md font-semibold mt-2 ${
            priceChangePercent >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="-ml-1">Price change (24Hr)</span>
          <span className="text-sm ml-1">
            :{" "}
            {priceChangePercent != null ? priceChangePercent.toFixed(2) : "N/A"}
            %
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-between text-sm text-gray-800 mb-4">
        <div>
          <div className="font-semibold pb-1">
            {high24hr != null ? `$${high24hr.toLocaleString("en-US")}` : "N/A"}
          </div>
          <div className="text-xs">High 24Hrs</div>
        </div>
        <div>
          <div className="font-semibold pb-1">
            ${least24 != null ? least24 : "N/A"}
          </div>
          <div className="text-xs">Least 24Hrs</div>
        </div>
        <div>
          <div className="font-semibold pb-1">
            {price_change_percentage_24h != null
              ? `${price_change_percentage_24h}%`
              : "N/A"}
          </div>
          <div className="text-xs">% Change 24Hrs</div>
        </div>
      </div>

      <div className="text-gray-800">
        <span className="bg-green-500 font-semibold text-white px-2 py-1 rounded-md text-xs">
          MARKET OPEN
        </span>
        <span className="ml-2 text-xs  font-semibold ">
          (As of 06:48 GMT+5:30)
        </span>
      </div>
    </div>
  );
}

export default RightLogo;
