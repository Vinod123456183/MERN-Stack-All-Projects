import React from "react";
import DashBoardCard1 from "../miniComponents/DashBoardCard1";
import AutoSideBar from "../miniComponents/AutoSideBar";
import LeftSmallDetail from "../miniComponents/LeftSmallDetail";
import TradeViewMiddle from "../miniComponents/TradeViewMiddle";
import RightLogo from "../miniComponents/RightLogo";
import BelowCryptoTable from "../miniComponents/BelowCryptoTable";
import CoinSecond from "../miniComponents/CoinSecond";
import Converter from "../miniComponents/Convertor";
import TopWebsites from "../miniComponents/TopWebsites";
import { useCoins } from "../contexts/CoinContextMain";
import Loader from "../Components/Core/Loader";
import Error from "../Components/Core/Error";

function Home() {
  const { data, isError, isLoading } = useCoins();
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

  return (
    <>
      <div className="w-full lg:pl-14">
        <div className="grid  xl:grid-cols-4 gap-3 w-full pt-4 lg:pt-0">
          {data.slice(0, 4).map((item, index) => (
            <DashBoardCard1
              key={item.id || index}
              coinLogo={item.image}
              plusOrMinus={item.price_change_percentage_24h} // You can replace this with item.price_change_percentage_24h if available
              coinName={item.name}
              coinShortName={item.symbol}
              coinPrice={`$${item.current_price}`}
              route={`/coin/${item.id}`}
              dataArray={[
                { name: "Current", value: item.current_price },
                { name: "Highest", value: item.high_24h },
                { name: "Lowest", value: item.low_24h },
                { name: "ATH", value: item.ath },
              ]}
            />
          ))}
        </div>

        <div className="py-3">
          <AutoSideBar />
        </div>

        <div className=" flex flex-col lg:flex-row  gap-3 w-full ">
          <div className="space-y-4">
            <LeftSmallDetail
              topHeading={data[0].name}
              coinPrice={data[0].current_price}
              coinShortName={data[0].symbol}
              timeAndRefreshRate={data[0].name}
              image={data[0].image}
              dailyVolumeOfTopCoin={data[0].total_volume}
              cointVolumeOfTopCoin={data[0].market_cap}
            />
            <LeftSmallDetail
              topHeading={data[1].name}
              coinPrice={data[1].current_price}
              coinShortName={data[1].symbol}
              timeAndRefreshRate={data[1].name}
              image={data[1].image}
              dailyVolumeOfTopCoin={data[1].total_volume}
              cointVolumeOfTopCoin={data[1].market_cap}
            />
          </div>
          <TradeViewMiddle />
          <div className="space-y-4">
            <RightLogo
              image={data[Math.floor(Math.random() * data.length)].image}
              coinFullName={data[Math.floor(Math.random() * data.length)].name}
              coinShortName={
                data[Math.floor(Math.random() * data.length)].symbol
              }
              price={
                data[Math.floor(Math.random() * data.length)].current_price
              }
              priceCurrency={
                data[Math.floor(Math.random() * data.length)].priceCurrency
              }
              priceChangePercent={
                data[Math.floor(Math.random() * data.length)].price_change_24h
              }
              high24hr={data[Math.floor(Math.random() * data.length)].high_24h}
              least24={data[Math.floor(Math.random() * data.length)].low_24h}
              price_change_percentage_24h={
                data[Math.floor(Math.random() * data.length)]
                  .price_change_percentage_24h
              }
            />

            <Converter />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row pt-3  gap-3 w-full ">
          <div className="space-y-4">
            <CoinSecond />
          </div>
          <BelowCryptoTable />
          <div className="space-y-4">
            <RightLogo
              image={data[Math.floor(Math.random() * data.length)].image}
              coinFullName={data[Math.floor(Math.random() * data.length)].name}
              coinShortName={
                data[Math.floor(Math.random() * data.length)].symbol
              }
              price={
                data[Math.floor(Math.random() * data.length)].current_price
              }
              priceCurrency={
                data[Math.floor(Math.random() * data.length)].priceCurrency
              }
              priceChangePercent={
                data[Math.floor(Math.random() * data.length)].price_change_24h
              }
              high24hr={data[Math.floor(Math.random() * data.length)].high_24h}
              least24={data[Math.floor(Math.random() * data.length)].low_24h}
              price_change_percentage_24h={
                data[Math.floor(Math.random() * data.length)]
                  .price_change_percentage_24h
              }
            />
            <TopWebsites />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
