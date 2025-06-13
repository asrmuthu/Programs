import React, { useState, useEffect } from "react";
import axios from "axios";

const Capgemini_debounching = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);
  const [debounceVal, setDebounceVal] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, 500); // delay of 500ms

    return () => {
      clearTimeout(handler); // clear previous timeout on every keystroke
    };
  }, [val]);

  // Fetch data when debounced value changes
  useEffect(() => {
    if (debounceVal.trim() === "") {
      setItems([]);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${debounceVal}`
        );
        setItems(res.data.products);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [debounceVal]);

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Capgemini_debounching;