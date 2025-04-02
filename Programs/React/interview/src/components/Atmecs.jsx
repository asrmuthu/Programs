import React from "react";
import { useState } from "react";

const Atmecs = () => {
  const data = [1, 2, 3, 5, 6];
  const [val, setVal] = useState("1");

  return (
    <div>
      <p>App</p>
      <select onChange={(e) => setVal(e.target.value)}>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <p>{val}</p>
    </div>
  );
};
export default Atmecs;
