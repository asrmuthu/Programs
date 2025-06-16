import React, { useState, useEffect } from "react";
import axios from "axios";

const API = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const API = await axios.get("https://dummyjson.com/products?limit=100"); //first limit
      console.log(API.data.products);
      setItems(API.data.products.slice(0, 5));
    };

    fetchAPI();
  }, []);

  const handleSearch = () => {
    const filtered = items.filter((item) => item.title === val);
    setItems(filtered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search for a product"
        />
        <button onClick={handleSearch}>Search</button>
        <ol>
          {items.map((item, id) => (
            <li key={id}>
              {item.title} - Rating: {item.rating}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <select value={val} onChange={(e) => setVal(e.target.value)}>
          <option value=""></option>
          {items.map((item, index) => (
            <option key={index}>{item.title}</option>
          ))}
          <option></option>
        </select>
        <p> {val} </p>
      </div>
    </div>
  );
};

export default API;
