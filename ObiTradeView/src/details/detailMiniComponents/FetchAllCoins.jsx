import React, { useState } from "react";
import MainFetchCoinCard from "./MainFetchCoinCard";
import { useCoins } from "../../contexts/CoinContextMain";
import Loader from "../../Components/Core/Loader";
import Error from "../../Components/Core/Error";

function FetchAllCoins() {
  const { data, isError, isLoading } = useCoins();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Change based on how many cards you want per page
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

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="w-full pt-4 lg:pt-1">
      <div className="lg:pl-16 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-5  gap-4 ">
        {currentData.map((coin) => (
          <MainFetchCoinCard
            key={coin.id}
            symbol={coin.image}
            name={coin.name}
            current_price={coin.current_price}
            dataArray={[
              { name: "ATL", value: coin.atl },
              { name: "Low 24h", value: coin.low_24h },
              {
                name: "Yesterday",
                value: coin.current_price - coin.price_change_24h,
              },
              { name: "Current", value: coin.current_price },
              { name: "High 24h", value: coin.high_24h },
              { name: "ATH", value: coin.ath },
            ]}
            price_change_percentage_24h={coin.price_change_percentage_24h}
            low_24h={coin.low_24h}
            link={`/coin/${coin.id}`}
            high_24h={coin.high_24h}
            ath_change_percentage={coin.ath_change_percentage}
            market_cap_change_percentage_24h={
              coin.market_cap_change_percentage_24h
            }
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-sm lg:text-lg rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm lg:text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className=" text-sm lg:text-lg px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FetchAllCoins;

// import React from "react";
// import MainFetchCoinCard from "./MainFetchCoinCard";
// import { useCoins } from "../../contexts/CoinContextMain";

// function FetchAllCoins() {
//   const { data, isError, isLoading } = useCoins();

//   if (isLoading) return <p>Loading...</p>;

//   if (isError) return <p><Error /></p>;

//   if (!data || data.length === 0) return <p>No coin data available</p>;

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p><Error /></p>;
//   if (!data || data.length === 0) return <p>No coin data available</p>;

//   return (
//     <div className="w-full lg:pl-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
//       {data.map((coin) => (
//         <MainFetchCoinCard
//           key={coin.id}
//           symbol={coin.symbol}
//           name={coin.name}
//           current_price={coin.current_price}
//           dataArray={[
//             { name: "Current", value: coin.current_price },
//             { name: "High 24hrs", value: coin.high_24h },
//             { name: "Low 24hrs", value: coin.low_24h },
//             { name: "ATH", value: coin.ath },
//           ]}
//           price_change_percentage_24h={coin.price_change_percentage_24h}
//           low_24h={coin.low_24h}
//           link={`/coin/${coin.id}`}
//           high_24h={coin.high_24h}
//           ath_change_percentage={coin.ath_change_percentage}
//           market_cap_change_percentage_24h={
//             coin.market_cap_change_percentage_24h
//           }
//         />
//       ))}
//     </div>
//   );
// }

// export default FetchAllCoins;

// import React, { useEffect } from "react";
// import MainFetchCoinCard from "./MainFetchCoinCard";
// import { useCoins } from "../../contexts/CoinContextMain";
// import { useInView } from "react-intersection-observer"; // Import the hook

// function FetchAllCoins() {
//   const {
//     data,
//     isError,
//     isLoading,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   } = useCoins();

//   const { ref, inView } = useInView({
//     triggerOnce: false, // Keep checking every time it comes into view
//     threshold: 1.0, // Trigger when 100% of the loader is visible
//   });

//   // Fetch next page when the loader is in view
//   useEffect(() => {
//     if (inView && hasNextPage && !isFetchingNextPage) {
//       fetchNextPage(); // Trigger next page fetch when loader is in view
//     }
//   }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p><Error /></p>;
//   if (!data || data.pages.length === 0) return <p>No coin data available</p>;

//   return (
//     <div>
//       <div className="w-full lg:pl-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
//         {data.pages.map((page) =>
//           page.map((coin) => (
//             <MainFetchCoinCard
//               key={coin.id}
//               symbol={coin.symbol}
//               name={coin.name}
//               rewardRate="5.87%"
//               change="-1.23%"
//               data={coin.chartData}
//               link={`/coins/${coin.id}`}
//             />
//           ))
//         )}
//       </div>

//       {/* Loader for infinite scrolling */}
//       <div ref={ref} className="text-center mt-4">
//         {isFetchingNextPage ? (
//           <p>Loading more coins...</p>
//         ) : (
//           hasNextPage && <p>Load more</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FetchAllCoins;
