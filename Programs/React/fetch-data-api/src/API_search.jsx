import React, { useState, useEffect } from "react";
import axios from "axios";

const API_search = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  // Fetching data from the API on mount
  useEffect(() => {
    const fetchAPI = async () => {
      const API = await axios.get("https://dummyjson.com/products");
      console.log(API.data.products);
      setItems(API.data.products);
    };

    fetchAPI();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setVal(e.target.value);
  };

  // Filter the items based on the search term
  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.title.includes(val)
    );
    setItems(filtered);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        value={val}
        onChange={handleSearchChange}
        placeholder="Search for a product"
      />
      <button onClick={handleSearch}>Search</button>
      <ol>
        {
       
       items.map((item, id) => (
            <li key={id}>
              {item.title} - Rating: {item.rating}
            </li>
          
        ))}
      </ol>
    </div>
  );
};

export default API_search;
