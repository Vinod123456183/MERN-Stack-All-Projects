// import axios from "axios";

// // Initialize Axios instance
// const api = axios.create({
//   baseURL: "https://api.coingecko.com",
// });

// // Fetch coins data based on page and page size
// export const fetchCoins = async (page = 1, coinsPerPage = 10) => {
//   const response = await api.get(
//     `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${page}`
//   );
//   return response.data;
// };

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com",
});

export const fetchPosts = async () => {
  const response = await api.get(
    "/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250"
  );
  return response.data;
};
