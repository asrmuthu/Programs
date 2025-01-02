import "./App.css";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const[result, setResult] = useState("");

const handleInput = (e) => {
  if(e.target.name === "height") {
    setHeight(e.target.value);
  } else {
    setWeight(e.target.value);
  }
}
const calculate = () => {
  if (!height || !weight || height <= 0 || weight <= 0) {
    clear();
    alert("Please enter valid data");
  }
  else {
    const convertMeter = height / 100;
    const bmi = weight / (convertMeter * convertMeter);
    setResult(bmi.toFixed(2)); 
    
  }
}

const handleKeyDown = (e) => {
  if(e.key === "Enter") {
    calculate();
  }
}

const clear = () => {
  setHeight("");
  setWeight("");
  setResult("");
}
  return (
    <div className="bmi-calculator">
      <div className="logo"></div>
      <div className="data">
        <h2>BMI Calculator</h2>
        <div className="input_container">
          <label htmlFor="height">Height(cm):</label> 
          <input type="number" id="height" name="height" className="textbox" value={height} onChange={handleInput} onKeyDown={handleKeyDown} />
          <label htmlFor="weight">Weight(kg):</label>
          <input type="number" id="weight" name="weight" className="textbox" value={weight} onChange={handleInput} onKeyDown={handleKeyDown} />
        </div>
        <button className="ok" onClick={calculate} onKeyDown={handleKeyDown}>Calculate BMI</button>
        <button className="clear" onClick={clear}>Clear</button>
        {result !== "" && <div className="result">
          <p>Your BMI is: <strong>{result}</strong> </p>
          <p>State: <strong>  {result < 18.5 ? "Underweight" : result < 24.9 ? "Normal weight" : result < 29.9 ? "Overweight" : "Obesity"}</strong> </p>
        </div>}
      </div>
    </div>
  );
}

export default App;
