import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    const Api = async () => {
      const res = [
        axios.get("https://jsonplacaaholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
      ];

      const prom = await Promise.allSettled(res);

      if (prom[0].status === "fulfilled") {
        setItems1(prom[0].value.data);
      }
      if (prom[1].status === "fulfilled") {
        setItems2(prom[1].value.data);
      }

      console.log("Users:", prom[0]);
      console.log("Posts:", prom[1]);
    };

    Api();
  }, []);

  return (
    <div>
      {items2.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;
