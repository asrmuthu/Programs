import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const API = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setItems(res.data);
    };

    API();
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};

export default App;
