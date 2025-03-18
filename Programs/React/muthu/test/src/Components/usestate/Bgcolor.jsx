import React from "react";
import { useState } from "react";

const Bgcolor = () => {
  const [color, setColor] = useState("White");

  return (
    <div style={{ height: "100vh", backgroundColor: color }}>
      <label>Select Background Color: </label>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="green">green</option>
      </select>
    </div>
  );
};

export default Bgcolor;
