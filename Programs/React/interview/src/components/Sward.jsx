import React, { useState, useEffect } from "react";

const Sward = () => {
  const [items, setItems] = useState([]);
  const [start, setStart] = useState(false); // State to control the start of item addition
  const allItems = ["Apple", "Orange", "Banana"];

  useEffect(() => {
    if (start) {
      allItems.map((item, index) => {
        setTimeout(() => {
          setItems((prev) => [...prev, item]);
        }, index * 1000); // 1 second per item
      });
    }
  }, [start]); // Trigger the effect when `start` state changes

  const handleItems = () => {
    setStart(true); // Start adding items when button is clicked
  };

  return (
    <div>
      <button onClick={handleItems}>Start</button>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Sward;
