import React from "react";

// TradeViewMiddle component (chart)
function TradeViewMiddle() {
  return (
    <div className="bg-red-40 w-full p-3 bg-white h-[600px]  rounded-xl tradingview-widget-container fullborder">
      <iframe
        scrolling="no"
        allowtransparency="true"
        frameBorder="0"
        src="https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#%7B%22autosize%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A593%2C%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22interval%22%3A%22D%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22hide_top_toolbar%22%3Atrue%2C%22withdateranges%22%3Atrue%2C%22allow_symbol_change%22%3Atrue%2C%22save_image%22%3Afalse%2C%22studies%22%3A%5B%22STD%3BMACD%22%2C%22STD%3BChop%251Zone%22%5D%2C%22support_host%22%3A%22%22%2C%22utm_source%22%3A%22crypto-tokenizer-admin-dashboard.multipurposethemes.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22advanced-chart%22%2C%22page-uri%22%3A%22crypto-tokenizer-admin-dashboard.multipurposethemes.com%2Fbs5%2Fmain%2Findex13.html%23%22%7D"
        title="advanced chart TradingView widget"
        lang="en"
        style={{
          height: "100%",
          width: "100%",
        }}
      ></iframe>
      <style>
        {`
          .tradingview-widget-copyright {
            font-size: 13px !important;
            line-height: 32px !important;
            text-align: center !important;
            vertical-align: middle !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
            color: #B2B5BE !important;
          }

          .tradingview-widget-copyright .blue-text {
            color: #2962FF !important;
          }

          .tradingview-widget-copyright a {
            text-decoration: none !important;
            color: #B2B5BE !important;
          }

          .tradingview-widget-copyright a:visited {
            color: #B2B5BE !important;
          }

          .tradingview-widget-copyright a:hover .blue-text {
            color: #1E53E5 !important;
          }

          .tradingview-widget-copyright a:active .blue-text {
            color: #1848CC !important;
          }

          .tradingview-widget-copyright a:visited .blue-text {
            color: #2962FF !important;
          }
        `}
      </style>
    </div>
  );
}

export default TradeViewMiddle;
