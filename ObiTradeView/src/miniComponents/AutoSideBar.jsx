import { Loader } from "lucide-react";
import { useCoins } from "../contexts/CoinContextMain";
import Error from "../Components/Core/Error";

function AutoSideBar() {
  const { data, isError, isLoading } = useCoins();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-4">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Error />
      </div>
    );
  }

  if (!data || data.length === 0) return <p>No coin data available</p>;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-2 overflow-hidden">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {data.map((coin, index) => (
            <div
              key={`${coin.id}-${index}`}
              className="flex items-center gap-2 px-10 py-2 border-l border-gray-600"
            >
              {/* Logo */}
              <img
                src={coin.image}
                alt={coin.name}
                className="w-5 h-5 rounded-full"
              />

              {/* Name */}
              <span className="font-medium text-sm text-blue-600">
                {coin.name}
              </span>

              <span className="text-xs text-gray-500">
                [{coin.symbol?.toUpperCase()}]
              </span>

              {/* Price */}
              <span className="font-semibold text-sm">
                {coin.current_price != null
                  ? `$${coin.current_price.toFixed(2)}`
                  : "N/A"}
              </span>

              {/* Change */}
              <span
                className={`text-xs font-bold ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h != null
                  ? `${coin.price_change_percentage_24h.toFixed(2)}%`
                  : "N/A"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        .animate-scroll {
          animation: scroll 1300s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

export default AutoSideBar;
