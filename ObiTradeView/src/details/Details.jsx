import React, { useEffect, useState } from "react";
import NavigatingComponent from "../Components/Core/NavigatingComponent";
import NameOfCoin from "./detailMiniComponents/NameOfCoin";
import DetailsOfCoin from "./detailMiniComponents/DetailsOfCoin";
import AutoSideBar from "../miniComponents/AutoSideBar";
import TradingViewWidget from "./detailMiniComponents/TradingViewWidget";
import MyChart from "./detailMiniComponents/MyChart";
import RightLogo from "../miniComponents/RightLogo";
import DashBoardCard1 from "../miniComponents/DashBoardCard1";
import { useCoins } from "../contexts/CoinContextMain";
import { useParams } from "react-router-dom";
import InternalChart from "./detailMiniComponents/InternalChart";
import Loader from "../Components/Core/Loader";
import Error from "../Components/Core/Error";
function Details() {
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
      <div className="flex items-center justify-center w-full h-full">
        <Error />;
      </div>
    );
  if (!data || data.length === 0) return <p>No coin data available</p>;
  const coin = data?.find((coin) => coin.id === id);

  const [randomCoins, setRandomCoins] = useState([]);

  useEffect(() => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    setRandomCoins(shuffled.slice(0, 4));
  }, []);

  return (
    <>
      <div className="  lg:pl-14 ">
        <NavigatingComponent coinId={coin.id} />

        <div className=" pt-5 flex  gap-3 flex-col ">
          <NameOfCoin
            coinImage={coin.image}
            coinImageAlt={coin.name}
            coinName={coin.name}
            coinPrice={coin.current_price}
            coinPriceChange24h={coin.price_change_24h}
            coinRank={0}
            coinTags={["Mineable", "PoW", "Smart Contracts", coin.name]}
          />

          <AutoSideBar />
        </div>
        <div className="pt-4 flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <InternalChart />
          </div>
          <div className="flex flex-col gap-4">
            <DashBoardCard1
              key={coin.id || index}
              coinLogo={coin.image}
              plusOrMinus={coin.price_change_percentage_24h} // You can replace this with coin.price_change_percentage_24h if available
              coinName={coin.name}
              coinShortName={coin.symbol}
              coinPrice={`$${coin.current_price}`}
              route={`/coin/${coin.id}`}
            />
            <RightLogo
              image={coin.image}
              coinFullName={coin.symbol}
              coinShortName={coin.name}
              price={coin.current_price}
              // priceCurrency={coin.current_price}
              priceChangePercent={coin.price_change_24h}
              high24hr={coin.high_24h}
              least24={coin.low_24h}
              price_change_percentage_24h={coin.price_change_percentage_24h}
            />
          </div>
        </div>
        <div className="pt-4 flex flex-col">
          <div>
            <DetailsOfCoin
              marketCap={`$${coin?.market_cap.toLocaleString()}`}
              marketCapChange={`${coin?.market_cap_change_percentage_24h.toFixed(2)}%`}
              marketCapChangeType={
                coin?.market_cap_change_percentage_24h >= 0 ? "up" : "down"
              }
              priceChange24h={`$${coin?.price_change_24h.toFixed(2)}`}
              priceChangePercentage24h={`${coin?.price_change_percentage_24h.toFixed(2)}%`}
              priceChangeType={
                coin?.price_change_percentage_24h >= 0 ? "up" : "down"
              }
              volume={`$${coin?.total_volume.toLocaleString()}`}
              circulatingSupply={`${coin?.circulating_supply.toLocaleString()} ${coin?.symbol.toUpperCase()}`}
              totalSupply={`${coin?.total_supply.toLocaleString()}`}
            />
          </div>
          <div className="pt-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
            {randomCoins.slice(0, 4).map((coin) => (
              <DashBoardCard1
                key={coin.id || index}
                coinLogo={coin.image}
                plusOrMinus={coin.price_change_percentage_24h} // You can replace this with coin.price_change_percentage_24h if available
                coinName={coin.name}
                coinShortName={coin.symbol}
                coinPrice={`$${coin.current_price}`}
                route={`/coin/${coin.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
