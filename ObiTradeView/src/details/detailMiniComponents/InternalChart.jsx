import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useCoins } from "../../contexts/CoinContextMain";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Core/Loader";
import Error from "../../Components/Core/Error";

function InternalChart() {
  const { data, isError, isLoading } = useCoins();
  const { id } = useParams();
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

  const coin = data?.find((coin) => coin.id === id);
  if (!coin) return <p>Coin not found</p>;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      return (
        <div className="bg-zinc-900 text-white p-3 rounded shadow text-sm">
          <div className="font-semibold">{item.payload.name}</div>
          <div>Value: {item.payload.value.toLocaleString()}</div>
        </div>
      );
    }
    return null;
  };

  const dataArray = [
    { name: "ATL", value: coin.atl },
    { name: "Low 24h", value: coin.low_24h },
    { name: "Yesterday", value: coin.current_price - coin.price_change_24h },
    { name: "Current", value: coin.current_price },
    { name: "High 24h", value: coin.high_24h },
    { name: "ATH", value: coin.ath },
  ];

  return (
    <div className="h-full bg-gray-50">
      {" "}
      {/* ✅ Set height here */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataArray}>
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
  );
}

export default InternalChart;
