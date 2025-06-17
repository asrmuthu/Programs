import React, { useEffect, useState } from "react";
import axios from "axios";

function PromiseAll() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API = async () => {
      try {
        const res = [
          axios.get("https://jsonplaceholder.typicode.com/posts/1"),
          axios.get("https://jsonplaceholder.typicode.com/posts/2"),
        ];

        const prom = await Promise.all(res);
        const mergeAPI = prom.map((item) => item.data);
        setPosts(mergeAPI);
        console.log(mergeAPI);
      } catch (error) {
        setError("Failed to fetch posts");
        console.error(error);
      }
    };

    API();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromiseAll;
