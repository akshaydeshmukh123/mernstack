import "./App.css";
import React, { useEffect, useState } from "react";

import axios from "axios";

import CryptoTable from "./Components/CryptoTable";
import CustomPagination from "./Components/CustomPagination";
import CryptoModel from "./Components/CryptoModel";

function App() {
  const [Coins, SetCoins] = useState([]);

  const [Icons, setIcons] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [matchData, setMatchData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCoin, setSelectedCoin] = useState(null);

  const [modalShow, setModalShow] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlepageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const fetchExchangeData = async () => {
    try {
      const response = await axios.get(
        "https://frightened-ruby-peplum.cyclic.app/exchanges"
      );

      SetCoins(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchIconData = async () => {
    try {
      const response = await axios.get(
        "https://frightened-ruby-peplum.cyclic.app/exchanges/icon"
      );
      setIcons(response.data);

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };

  useEffect(() => {
    fetchExchangeData();
    fetchIconData();
  }, []);

  useEffect(() => {
    if (Coins.length > 0 && Icons.length > 0) {
      const mergeData = Coins.map((exchange) => {
        const matchinIcon = Icons.find(
          (icon) => icon.exchange_id === exchange.exchange_id
        );

        return {
          id: exchange.id,
          name: exchange.name,
          icon: matchinIcon ? matchinIcon.url : null,
          website: exchange.website,
          
          data_quote_start: exchange.data_quote_start,
          data_quote_end: exchange.data_quote_end,
          data_orderbook_start: exchange.data_orderbook_start,
          data_orderbook_end: exchange.data_orderbook_end,
          data_trade_start: exchange.data_trade_start,
          data_trade_end: exchange.data_trade_end,
          data_symbols_count: exchange.data_symbols_count,
          volume_1hrs_usd: exchange.volume_1hrs_usd,
          volume_1day_usd: exchange.volume_1day_usd,
          volume_1mth_usd: exchange.volume_1mth_usd,

          volume: exchange.volume_1day_usd,
        };
      });

      setMatchData(mergeData);
    }
  }, [Coins, Icons]);

  

  const filtered = matchData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalpages = Math.ceil(matchData.length / 10);

  console.log(totalpages);

  const paginatedExchanges = filtered.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div className="App">
      <h1>Top Crypto Exchanges</h1>
      <h6>
        Compare all top crypto exchanges the list is ranked by Trading Volume
      </h6>

      {/* Exachange product Searching */}

      <input
        type="text"
        placeholder="Find a exchanges"
        value={searchTerm}
        onChange={handleChange}
      />

      <hr />
      <div className="container" style={{display:"flex",justifyContent:"space-evenly"  }}>
        <div>
          <CryptoTable
            datas={paginatedExchanges}
            onCoinClick={handleCoinClick}
          />

          <CustomPagination
            OnpageChange={handlepageChange}
            currentPage={currentPage}
            totalpages={totalpages}
          />
        </div>

        <div>
          <CryptoModel
            coin={selectedCoin}
            show={modalShow}
            handleClose={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
