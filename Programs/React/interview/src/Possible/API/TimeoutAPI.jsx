import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          { timeout: 50 }
        );
        setItems(res.data);
      } catch (err) {
        console.error("timeout error", err);
        setError("Timeout Error for fetchng API");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default App;