import React, { useState, useEffect } from "react";

const API_handing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      try {
        const API1 = await fetch("https://dummyjson.com/products");
        const API = await API1.json();
        setItems(API.products); // Store products in state
      } catch (error) {
        console.log("Error", error);
      }
    };

    FetchAPI();
  }, []);

  return (
    

     // "tags": [
    //     "beauty",
    //     "mascara"
    //   ],

     <div>
      {items.map((item, id) => (
        <p key={id}>{item.tags.join(" ")}</p>
      ))}
    </div>

   
  );
};

export default API_handing;
