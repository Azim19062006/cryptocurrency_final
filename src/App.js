import React, { useState, useEffect } from "react";
import "./index.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip/Tooltip";
import Accordion from "./components/Accordion";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      setCryptoData(data.data);
      setFilteredData(data.data);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    fetchData();
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    const filtered = cryptoData.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query) ||
        crypto.symbol.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const formatChange = (value) => {
    const formattedValue = value > 0 ? `+${value}` : value;
    const color = value > 0 ? "green" : "red";
    return <span style={{ color }}>{formattedValue}%</span>;
  };

  return (
    <div>
      <Heading level = {1}>Cryptocurrency Prices</Heading>
      <Button variant="bordered" size="lg" onClick = {handleUpdate}>Update</Button>
      <Input 
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search"
      size="md"/>
      {loading ? (
        <Typography textSize="lg">Loading...</Typography>) : (
        <div>
          {filteredData.map((cryptoData) => (
            <Accordion
              key={cryptoData.id}
              title={cryptoData.name}
              extra={`Symbol: ${cryptoData.symbol}`}>

              <Typography><b>Symbol:</b> {cryptoData.symbol}</Typography>
              <Typography><b>Price USD:</b> {cryptoData.price_usd}</Typography>
              <Typography><b>Price BTC:</b> {cryptoData.price_btc}</Typography>
              <Typography>
                <Tooltip
                  text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
                    <b >Market Cap USD:</b> 
                </Tooltip>{" "}
                {cryptoData.market_cap_usd}
              </Typography>
              <Typography>
                <b>Percent Change 24H:</b> {formatChange(cryptoData.percent_change_24h)}
              </Typography>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
