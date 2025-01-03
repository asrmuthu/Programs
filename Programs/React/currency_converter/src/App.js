import logo from "./logo.svg";
import "./App.css";
import { MdCurrencyExchange } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromcurrency, setFromCurrency] = useState("USD");
  const [tocurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const date = new Date();

  useEffect(() => {
    setLoading(true);
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;//https://api.exchangerate-api.com/v4/latest/USD
        const response = await axios.get(url);
        setExchangeRate(response.data.rates[tocurrency]);
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.log("Error in fetching exchange rate", error.message);
        setError("Error in fetching data(Network Error)."); 
      }
      setLoading(false);
    };
    getExchangeRate();
  }, [fromcurrency, tocurrency]);

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    setAmount(val);
  };

  return (
    <div className="App">
      <div className="logo">
        <MdCurrencyExchange />
      </div>
      {loading  && <div className='loading'>Loading ...</div>}
      {error && <div className='error'>{error}. Please contact <a href="mailto:asrmuthu57@gmail.com">
                        asrmuthu57@gmail.com
                    </a></div>}
      {!error && !loading && <div className="data">
        <h2>Currency Converter</h2>
        <div className="input">
          <div className="amount">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="textbox"
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div className="from">
            <label htmlFor="from">From Currency</label>
            <select
              id="from"
              value={fromcurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map((index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>
          <div className="to">
            <label htmlFor="to">To Currency</label>
            <select
              id="to"
              value={tocurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map((index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>
          {amount > 0 && exchangeRate !== null && !isNaN(amount * exchangeRate) && (
            <p>
              <span style={{ color: "green" }}>{amount} </span> {fromcurrency} is Equal to{" "}
              <span style={{ color: "green" }}>{(amount * exchangeRate).toFixed(3)}</span>{" "}
              {tocurrency} <br /><br />
              1 {fromcurrency} = {exchangeRate.toFixed(2)} {tocurrency}
              {" "} <br /><span style={{ fontSize: "14px" }}>on {" "}
                {`${date.toLocaleDateString("en-US", {
                  weekday: "long",
                })}, ${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()}`}</span>
            </p>
          )}
        </div>
      </div>}
    </div>
  );
}

export default App;
