import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import axios from "axios";

const Getting_api_Virtualization = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`);

      if (res.length === 0) {
        setHasMore(false); // No more data available
      } else {
        setData((prevData) => [...prevData, ...res.data]); // Append data
      }
    };

    fetchData();
  }, [page]);

  const Row = ({ index, style }) => (
    <div style={style}>
      <p><strong>ID:</strong> {data[index]?.id}</p>
      <p><strong>Title:</strong> {data[index]?.title}</p>
    </div>
  );

  const loadMoreData = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <List
      height={800}
      width={1550}
      itemCount={data.length}
      itemSize={70}
      onItemsRendered={({ visibleStopIndex }) => {
        if (visibleStopIndex >= data.length - 5) {
          loadMoreData(); // Load next page when nearing the bottom
        }
      }}
    >
      {Row}
    </List>
  );
};

export default Getting_api_Virtualization;
