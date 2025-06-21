import React, { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const API = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res1 = await res.json();
      console.log(res1);
      setItems(res1);
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
