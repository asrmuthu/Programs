import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrolling = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const API = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const newData = res.data;
    setItems((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);

  };

  useEffect(() => {
    API();  }, []);

  return (
    <div>
      <h2>📜 Infinite Scroll (react-infinite-scroll-component)</h2>
      <InfiniteScroll
        dataLength={items.length}
        next={API}
        hasMore={hasMore}
      >
        {items.map((item) => (
          <div
            key={item.id}
          >
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrolling;