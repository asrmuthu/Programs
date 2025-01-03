import logo from "./logo.svg";
import "./App.css";
import { MdCurrencyExchange } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromcurrency, setFromCurrency] = useState("USD");
  const [tocurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(82); // 1 USD = 82 INR
useEffect(() => {
  const getExchangeRate = async () => {
    try{
      let url =`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`
      const response = await axios.get(url);
      console.log(response.data.rates);
      console.log("response",response);
      
    }
    catch(error){
      console.log("Error in fetching exchange rate", error);
    }
  }
})

const handleAmount = (e) => {
  const val = parseFloat(e.target.value);
  setAmount(isNaN(val) ?  0 : val);
}

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
            <input type="number" id="amount" className="textbox" value={amount} onChange={handleAmount}/>
          </div>
          <div className="from">
            <label htmlFor="from">From Currency</label>
            <select id="from" value={fromcurrency}>
              <option value="USD">{fromcurrency}</option>
            </select>
          </div>
          <div className="to" value={tocurrency}>
            <label htmlFor="to">To Currency</label>
            <select id="to">
              <option value="INR">{tocurrency}</option>
            </select>
          </div>
          <p>{amount} {fromcurrency} is Equal to {exchangeRate} {tocurrency}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
