import React from "react";

function TopWebsites() {
  const websites = [
    // Paper trading platforms
    {
      name: "TradingView",
      img: "https://imgs.search.brave.com/IG8DMf3bl-2PUR1KmfsI13siue92kj1JEoOtxvCakW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBmL1Ry/YWRpbmdWaWV3X2xv/Z29zX3JlYnJlbmQu/cG5nLzUxMnB4LVRy/YWRpbmdWaWV3X2xv/Z29zX3JlYnJlbmQu/cG5n",
      url: "https://www.tradingview.com/paper-trading/",
    },
    {
      name: "Webull",
      img: "https://imgs.search.brave.com/RhVExVo8TepKUUVSZDYGr4k8nXzph1kyu19X8_bOink/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taWxs/ZW5uaWFsbW9uZXku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA1L3dlYnVs/bC01MDB4NTAwLmpw/Zw",
      url: "https://www.webull.com/paper-trading",
    },
    {
      name: "Investopedia  ",
      img: "https://imgs.search.brave.com/dECgLUZ7c2i-8Ny_8HktYiCmBCG34fiXrRUAWka9CuI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQyLzEvaW52ZXN0/b3BlZGlhLWxvZ28t/cG5nX3NlZWtsb2dv/LTQyOTI3My5wbmc",
      url: "https://www.investopedia.com/simulator/",
    },
    {
      name: "NinjaTrader",
      img: "https://imgs.search.brave.com/xmMUWB4Cf9zC-GadSRpY46_Htet64L-jvUu7LC5ac7Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90cmFk/aW5nY29tcHV0ZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNS9UcmFk/aW5nLVNvZnR3YXJl/LVBhcnRuZXJzLTEu/cG5n",
      url: "https://ninjatrader.com/trading-platform/paper-trading",
    },
    {
      name: "Thinkorswim",
      img: "https://imgs.search.brave.com/MnkaYcmYkRhmgxyCKdrTaPpxMfK0AIZkMUClPHdvo3M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aGVyZS1pcy1hLXRo/aW5rb3Jzd2ltLWxv/Z28tZm9yLXVzZS13/aXRoLW1hY29zLWJp/Zy1zdXItb3ItdjAt/dXQ1NXRleWJkd2c4/MS5wbmc_YXV0bz13/ZWJwJnM9YTcyNTQ2/YmFiODk1ZWU3YjRk/YTUxMjBiNGM5ZWJm/MmY4OTMyZTBmZA",
      url: "https://www.tdameritrade.com/tools-and-platforms/thinkorswim.html",
    },

    {
      name: "TradeStation  ",
      img: "https://www.tradestation.com/favicon.ico",
      url: "https://www.tradestation.com/paper-trading/",
    },
    {
      name: "Interactive Brokers  ",
      img: "https://www.interactivebrokers.com/favicon.ico",
      url: "https://www.interactivebrokers.com/en/index.php?f=4987",
    },

    {
      name: "Fidelity Investments",
      img: "https://www.fidelity.com/favicon.ico",
      url: "https://www.fidelity.com",
    },
    {
      name: "Charles Schwab",
      img: "https://www.schwab.com/favicon.ico",
      url: "https://www.schwab.com",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 py-6  min-w-full max-w-[560px] xl:min-w-[280px] 2xl:min-w-[490px] fullborder ">
      <h2 className="text-md font-semibold text-gray-800 mb-5 text-center">
        <span className="line-through text-green-500">Websites</span> To View{" "}
        <span className="text-blue-600">Trading Charts </span>{" "}
        <span>& Stuffs</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {websites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center  justify-center hover:scale-105 p-3   rounded-xl fullborder  border border-gray-100 hover:shadow-lg  transition"
          >
            <img
              src={site.img}
              alt={site.name}
              className="w-10 h-10 mb-2 rounded-lg"
            />
            <p className="text-[11px] font-semibold text-gray-900 text-center ">
              {site.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TopWebsites;
