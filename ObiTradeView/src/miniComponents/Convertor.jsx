import React, { useState, useEffect } from "react";

function Converter() {
  const [coins, setCoins] = useState([]);
  const [fromCoin, setFromCoin] = useState("bitcoin");
  const [toCoin, setToCoin] = useState("ethereum");
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);

  // ✅ Fetch top coins from CoinGecko API
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  // ✅ Auto convert whenever inputs change
  useEffect(() => {
    if (!fromCoin || !toCoin || !amount) return;

    const handleConvert = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${fromCoin},${toCoin}&vs_currencies=usd`
      );
      const data = await res.json();
      const fromPrice = data[fromCoin]?.usd || 0;
      const toPrice = data[toCoin]?.usd || 1;
      setConverted((amount * fromPrice) / toPrice);
    };

    handleConvert();
  }, [fromCoin, toCoin, amount]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 py-5 h-auto min-w-full max-w-[560px] xl:min-w-[280px] 2xl:min-w-[490px] ">
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-600 text-center">
          Enter Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 text-sm px-3 border text-center border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-green-200 outline-none"
        />
      </div>

      {/* From Coin Dropdown */}
      <div className="mb-3">
        <label className="block text-xs text-center font-medium text-gray-600">
          From
        </label>
        <select
          value={fromCoin}
          onChange={(e) => setFromCoin(e.target.value)}
          className="w-full text-sm p-2 px-3 border text-center border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-200 outline-none"
        >
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      {/* To Coin Dropdown */}
      <div className="mb-3">
        <label className="block text-xs text-center font-medium text-gray-600">
          To
        </label>
        <select
          value={toCoin}
          onChange={(e) => setToCoin(e.target.value)}
          className="w-full text-sm p-2 px-3 border text-center border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-200 outline-none"
        >
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      {/* Result */}
      {converted !== null && (
        <div className="text-center py-3">
          <p className="text-sm text-gray-800 font-semibold">
            <span className="text-orange-600">
              {amount} {""}
            </span>
            <span className="text-orange-600">{fromCoin.toUpperCase()} = </span>
            <span className="text-green-600" >
              {converted.toFixed(6)} {toCoin.toUpperCase()}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Converter;
