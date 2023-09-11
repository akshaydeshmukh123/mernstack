const mongoose = require("mongoose");

const ExchangedataSchema = new mongoose.Schema({
  exchange_id: String,
  website: String,
  name: String,
  data_quote_start: Date,
  data_quote_end: Date,
  data_orderbook_start: Date,
  data_orderbook_end: Date,
  data_trade_start: Date,
  data_trade_end: Date,
  data_symbols_count: Number,
  volume_1hrs_usd: Number,
  volume_1day_usd: Number,
  volume_1mth_usd: Number,
});

ExchangedataModel = mongoose.model("Exchangedata", ExchangedataSchema);

module.exports = {
  ExchangedataModel
};

// //{
//     "exchange_id": "BINANCE",
//     "website": "https://www.binance.com/",
//     "name": "Binance",
//     "data_quote_start": "2017-12-18T00:00:00.0000000Z",
//     "data_quote_end": "2023-09-09T00:00:00.0000000Z",
//     "data_orderbook_start": "2017-12-18T21:50:58.3910192Z",
//     "data_orderbook_end": "2023-07-07T00:00:00.0000000Z",
//     "data_trade_start": "2017-07-14T00:00:00.0000000Z",
//     "data_trade_end": "2023-09-09T00:00:00.0000000Z",
//     "data_symbols_count": 2301,
//     "volume_1hrs_usd": 113917850.82,
//     "volume_1day_usd": 3268909164.34,
//     "volume_1mth_usd": 0
//   },