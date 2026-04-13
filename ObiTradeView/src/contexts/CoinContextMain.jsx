import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";
import { fetchPosts } from "../api/Api";

const CoinContext = createContext();

function CoinContextMain({ children }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchPosts,
    staleTime: 10, // 1 min — data is considered fresh for 1 min
    cacheTime: 5 * 60 * 1000, // 5 min — keeps data in memory after unmount
    keepPreviousData: true,
    // refetchInterval: 1000, // OPTIONAL: only if you really need it
    // refetchIntervalInBackground: true,
  });

  return (
    <CoinContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </CoinContext.Provider>
  );
}

export { CoinContextMain };
export const useCoins = () => useContext(CoinContext);

/*







import { useInfiniteQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";
import { fetchCoins } from "../api/Api";

const CoinContext = createContext();

function CoinContextMain({ children }) {
  const coinsPerPage = 10;

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["coins"],
    queryFn: ({ pageParam = 1 }) => fetchCoins({ pageParam, coinsPerPage }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === coinsPerPage ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 1000, // Cache data for 1 minute
    cacheTime: 5 * 60 * 1000, // Keep data in memory for 5 minutes
    keepPreviousData: true, // Keep previous data while loading new pages
  });

  return (
    <CoinContext.Provider
      value={{
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
}

export { CoinContextMain };
export const useCoins = () => useContext(CoinContext);




*/
