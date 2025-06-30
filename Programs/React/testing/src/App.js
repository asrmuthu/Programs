import React, { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const API = async () => {
      const res1 = await fetch("https://dummyjson.com/products");
      const res = await res1.json();
      setItems(res.products);
    };

    API();
  }, []);

  return (
    <div>
      <ol>
        {items.map((item, id) => (
          <li key={id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;