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
  const date = new Date();

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
        const response = await axios.get(url);
        setCurrencies(Object.keys(response.data.rates));
        setExchangeRate(response.data.rates);
        setExchangeRate(response.data.rates[tocurrency]);
      } catch (error) {
        console.log("Error in fetching exchange rate", error);
      }
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

      <div className="data">
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
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
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
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          {amount > 0 && exchangeRate !== null && !isNaN(amount * exchangeRate) && (
            <p>
             <span style={{color: "green"}}>{amount} </span> {fromcurrency} is Equal to {' '}
             <span style={{color: "green"}}>{(amount * exchangeRate).toFixed(3)}</span>{' '}{tocurrency} <br /><br />
             1 {fromcurrency} = {exchangeRate.toFixed(2)} {tocurrency}
             {" "} <br/><span style={{fontSize: "14px"}}>on {" "}
              {`${date.toLocaleDateString("en-US", {
                weekday: "long",
              })}, ${date.getDate()}-${
                date.getMonth() + 1
              }-${date.getFullYear()}`}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
