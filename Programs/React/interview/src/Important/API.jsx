import React, { useState, useEffect } from "react";
import axios from "axios";

const API = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    const API = async () => {
      const API = await axios.get("https://dummyjson.com/products?limit=100"); //first limit
      console.log(API.data.products);
      setItems(API.data.products.slice(0, 5));
    };

    API();
  }, []);

  const handleSearch = () => {
    const filtered = items.filter((item) => item.rating === val);
    setItems(filtered);
  };

  return (
    <div>
      {/* Select */}
      {/* <div>
        <select value={val} onChange={(e) => setVal(e.target.value)}>
          <option value="">Select</option>
          {items.map((item, index) => (
            <option key={index}>{item.title} - {item.rating}</option>
          ))}
        </select>
        <p> {val} </p>
      </div> */}

      

      {/* Search */}
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


      {/* Table */}
      {/* <div>
        <table border="1">
        <tbody>
          {items.map((item, id) => (
            <tr key={id}>
              <td>{item.brand}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.images[0]} width="200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> */}
    </div>
  );
};

export default API;
