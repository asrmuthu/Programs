import React, { useState, useEffect } from "react";
import axios from "axios";

const API_select = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    const FetchAPI = async () => {
      const API = await axios.get("https://dummyjson.com/products");
      console.log(API.data.products);
      setItems(API.data.products);
    };
    FetchAPI();
  }, []);
  const selectTitle = items.find((item) => item.title === val);

  return (
    <div>
      <select value={val} onChange={(e) => setVal(e.target.value)}>
        <option value="">Select Title</option>
        {items.map((item, id) => (
          <option key={id} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
      {selectTitle && <p>{selectTitle.rating}</p>}
    </div>
  );
};

export default API_select;
