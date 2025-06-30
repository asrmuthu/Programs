import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    const API = async () => {
      const res = [
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
      ];

      const prom = await Promise.all(res);
      console.log(prom[0]);
      console.log(prom[1]);
      setItems1(prom[0].data);
      setItems2(prom[1].data);
    };

    API();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {items1.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>Posts</h1>
      <ul>
        {items2.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
