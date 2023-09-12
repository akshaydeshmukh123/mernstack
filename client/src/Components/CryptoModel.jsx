import React from "react";

const CryptoModel = ({ coin, show, handleClose }) => {
  if (!show) return null;
  return (
    <div>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>

      <h2>Name:{coin.name}</h2>
      <img src={coin.icon} alt={coin.name} />
      <h4>
        Website:
        {coin.website}
      </h4>
      <h4>data_quote_start:{coin.data_quote_start}</h4>
      <h4>data_quote_end:{coin.data_quote_end}</h4>
      <h4>data_orderbook_start:{coin.data_orderbook_start}</h4>
      <h4>data_orderbook_end:{coin.data_orderbook_end}</h4>
      <h4>data_trade_start:{coin.data_trade_start}</h4>
      <h4>data_trade_end:{coin.data_trade_end}</h4>

      <h4>data_symbols_count:{coin.data_symbols_count}</h4>
      <h4>volume_1hrs_usd:{coin.volume_1hrs_usd}</h4>
      <h4>volume_1day_usd:{coin.volume_1day_usd}</h4>
      <h4>volume_1mth_usd": {coin.volume_1mth_usd}</h4>
    </div>
  );
};

export default CryptoModel;

// exchange_id": "HITBTC",
//     "website": "https://hitbtc.com/",
//     "name": "HitBTC",
//     "data_quote_start": "2017-03-18T00:00:00.000Z",
//     "data_quote_end": "2023-09-08T00:00:00.000Z",
//     "data_orderbook_start": "2017-03-18T22:53:44.409Z",
//     "data_orderbook_end": "2023-07-07T00:00:00.000Z",
//     "data_trade_start": "2013-12-27T00:00:00.000Z",
//     "data_trade_end": "2023-09-08T00:00:00.000Z",
//     "data_symbols_count": 2819,
//     "volume_1hrs_usd": 5541242.15,
//     "volume_1day_usd": 142970914.15,
//     "volume_1mth_usd": 0,
