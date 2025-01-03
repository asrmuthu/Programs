import logo from "./logo.svg";
import "./App.css";
import { MdCurrencyExchange } from "react-icons/md";

function App() {
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
            <input type="number" id="amount" className="textbox"/>
          </div>
          <div className="from">
            <label htmlFor="from">From Currency</label>
            <select id="from">
              <option value="inr">INR</option>
            </select>
          </div>
          <div className="to">
            <label htmlFor="to">To Currency</label>
            <select id="to">
              <option value="inr">INR</option>
            </select>
          </div>
          <p>I USD is Equal to 82 INR</p>
        </div>
      </div>
    </div>
  );
}

export default App;
