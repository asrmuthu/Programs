import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const API = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?limit=10&_pages=${page}`
    );
    const res1 = await res.json();
    console.log(res1);
    setItems((prev) => [...prev, ...res1]);
    setPage((prev) => prev + 1);
    if (res1.length < 10) {
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
      loader={<p>laoding</p>}
    >
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </InfiniteScroll>
  );
};

export default App;