import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [["COINBASE:BTCUSD|1M"]],
      chartOnly: false,
      width: "100%",
      height: 450,
      colorTheme: "light",
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "medium",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      utm_source: "example.com",
      utm_medium: "widget",
      utm_campaign: "symbol-overview",
      "page-uri": "example.com",
    });

    containerRef.current.appendChild(script);

    // Cleanup if component unmounts
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="w-full   mx-auto p-4 bg-white rounded shadow "
      ref={containerRef}
    ></div>
  );
};

export default TradingViewWidget;
