import React, { useState, useEffect } from "react";
import axios from "axios";

const API_set_Limit = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  // Fetching data from the API on mount
  useEffect(() => {
    const fetchAPI = async () => {
      const API = await axios.get("https://dummyjson.com/products?limit=100"); //first limit
      console.log(API.data.products);
      setItems(API.data.products.slice(0, 5)); // seond time of limit
    //   setItems(API.data.products);
    };

    fetchAPI();
  }, []);

  // Filter the items based on the search term
  const handleSearch = () => {
    const filtered = items.filter((item) => item.title === val);
    setItems(filtered);
  };

  return (
    <div>
      <h1>Product Search</h1>
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
  );
};

export default API_set_Limit;
