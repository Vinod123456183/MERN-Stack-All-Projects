import React from "react";
import { Search } from "lucide-react";
import SmallCoinDetail from "./SmallCoinDetail";
import { useCoins } from "../contexts/CoinContextMain";
import Loader from "../Components/Core/Loader";
import Error from "../Components/Core/Error";

function CoinSecond() {
  const { data, isError, isLoading } = useCoins();
  if (isLoading)
    return (
      <>
        <Loaderr />
      </>
    );
  if (isError)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Error />;
      </div>
    );
  if (!data || data.length === 0) return <p>No coin data available</p>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 py-6 h-full min-w-full max-w-[560px] xl:min-w-[280px] 2xl:min-w-[490px] fullborder">
      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 mb-4">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-transparent outline-none w-full text-sm"
          disabled
        />
      </div>

      {/* Table header */}
      <div className="flex justify-between text-xs font-semibold text-gray-400 px-1 mb-2">
        <span>Pairs :</span>
        <span>Price :</span>
        <span>Change :</span>
      </div>

      {/* Map over coin data */}
      <div className="space-y-4">
        {data.slice(0, 17).map((coin) => (
          <SmallCoinDetail
            key={coin.id} // make sure each coin has a unique id
            name={coin.symbol}
            price={coin.current_price}
            change={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
}

export default CoinSecond;
