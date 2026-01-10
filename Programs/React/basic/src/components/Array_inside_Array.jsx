import React, { useState, useEffect } from "react";
import axios from "axios";

const Array_inside_Array = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      const API = await fetch("https://dummyjson.com/products");
      const res = await API.json();
      setItems(res.products.flatMap((product) => product.reviews));
    };
    FetchAPI();
  }, []);

  return (
    <div>
      {items.map((item, id) => (
        <p key={id}>{item.rating}</p>
      ))}
    </div>
  );
};

export default Array_inside_Array;