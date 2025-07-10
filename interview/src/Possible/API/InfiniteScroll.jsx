import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const API = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?limit=20&_pages=${page}`
    );
    const D = res.data;
    console.log(D);
    setItems((prev) => [...prev, ...D]);
    setPage((prev) => prev + 1);
    if (D.length < 10) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    API();
  }, []);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={API}
      hasMore={hasMore}
      loader={<p>loading.............</p>}
    >
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </InfiniteScroll>
  );
};

export default App;