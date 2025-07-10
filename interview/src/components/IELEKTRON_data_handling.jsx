import React from "react";
import { useState } from "react";

const IELEKTRON_data_handling = () => {
  const [items, setItems] = useState(["muthu", "raj", "pandi"]);
  const [val, setVal] = useState("");

  const handleSearch = () => {
    setItems(items.filter((item) => item === val));
  };

  return (
    <div>
      <p>APP</p>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default IELEKTRON_data_handling;
