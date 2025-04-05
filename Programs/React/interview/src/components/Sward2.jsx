import React, { useState, useEffect } from "react";

const Sward2 = () => {
  const [items, setItems] = useState(["Apple", "Orange", "Banana"]);

  useEffect(() => {
    // Change "Orange" to "Mango" after 2 seconds
    setTimeout(() => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[1] = "Mango"; // Change the second item (Orange) to Mango
        return updatedItems;
      });
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
