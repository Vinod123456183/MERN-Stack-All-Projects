import React from "react";
import BelowCryptoTable2 from "./BelowCryptoTable2";
import { useCoins } from "../contexts/CoinContextMain";
import Loader from "../Components/Core/Loader";
import Error from "../Components/Core/Error";

export default function BelowCryptoTable() {
  const { data, isError, isLoading } = useCoins();
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (isError)
    return (
       <div className="flex items-center justify-center w-full h-full" >
        <Error />;
      </div>
    );
  if (!data || data.length === 0) return <p>No coin data available</p>;

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-bold text-sm">
              <th className="text-left  font-bold px-4 py-3">Asset</th>
              <th className="text-start font-bold  px-4 py-3">Last Price</th>
              <th className="text-start font-bold  px-4 py-3">Volume [USDT]</th>
              <th className="text-start font-bold  px-4 py-3">
                Price Change (24hr)
              </th>
            </tr>
          </thead>
          {data.slice(0, 11).map((coin, i) => (
            <BelowCryptoTable2
              key={i}
              symbol={coin.symbol}
              name={coin.name}
              price={coin.current_price}
              volume={coin.total_volume}
              icon={coin.image}
              change={coin.price_change_24h}
            />
          ))}
        </table>
      </div>
    </div>
  );
}
