import React, { useState, useEffect } from "react";

const SetTime = () => {
  const [items, setItems] = useState(["Apple", "Orange", "Banana"]);

  useEffect(() => {
    setTimeout(() => {
      const change = items.map((item) =>
        item === "Orange" ? "Cuvava" : "item"
      );
      setItems(change);
    }, 2000);
  }, []);

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default SetTime;
