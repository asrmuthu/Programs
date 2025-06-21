import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requests = [
        axios.get("https://jsonplacaaholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
      ];

      const results = await Promise.allSettled(requests);

      if (results[0].status === "fulfilled") {
        setItems1(results[0].value.data);
      }
      if (results[1].status === "fulfilled") {
        setItems2(results[1].value.data);
      }

      // setItems1(results[0].data);
      // setItems2(results[1].data);

      console.log("Users:", results[0]);
      console.log("Posts:", results[1]);
    };

    fetchData();
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
