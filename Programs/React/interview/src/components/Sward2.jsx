import React, { useState, useEffect } from "react";

const Sward2 = () => {
  const [items, setItems] = useState(["Apple", "Orange", "Banana"]);

  useEffect(() => {
    // Change "Orange" to "Mango" after 2 seconds
    setTimeout(() => {
      const val = items.map((item) => (item === "Orange" ? "m" : item));

      setItems(val);

    }, 2000); // 2 seconds delay
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

export default Sward2;
