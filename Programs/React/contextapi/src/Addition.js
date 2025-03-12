import React from "react";
import { useAddition } from "./AdditionContext";

const Addition = () => {
  const { num1, num2, sum, setNum1, setNum2, calculateSum } = useAddition();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Addition Calculator</h2>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Enter first number"
      />
      <br />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Enter second number"
      />
      <br />
      <button onClick={calculateSum} style={{ margin: "10px", padding: "10px 20px" }}>
        Add
      </button>
      <h3>Result: {sum}</h3>
    </div>
  );
};

export default Addition;
