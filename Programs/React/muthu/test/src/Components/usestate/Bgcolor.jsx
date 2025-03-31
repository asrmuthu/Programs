import React from "react";
import { useState } from "react";

const Bgcolor = () => {
  const [color, setColor] = useState("White");

  return (
    <div style={{ height: "100vh", backgroundColor: color }}>
      <label>Select Background Color: </label>
      <select onChange={(e) => setColor(e.target.value)}>
        <option>White</option>
        <option>Red</option>
        <option>Yellow</option>
        <option>green</option>
      </select>
    </div>
  );
};

export default Bgcolor;
