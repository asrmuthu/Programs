import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import axios from "axios";

function Getting_api_Scroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const apiName = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`);

    // if (newData.length === 0) {
    //   setHasMore(false);
    //   return;
    // }

    setData(prevData => [...prevData, ...apiName]); // ✅ Ensures latest state is used
    setPage(prevPage => prevPage + 1); // ✅ Update page correctly
  };

  useEffect(() => {
    fetchData();
  }, []); // ✅ Runs only once on mount

  return (
    <InfiniteScroll 
      dataLength={data.length} 
      next={fetchData} 
      hasMore={hasMore} 
      loader={<h4>Loading...</h4>}
    >
      {data.map((item) => (
        <p key={item.id}>{item.title}</p> // ✅ Corrected key & data property
      ))}
    </InfiniteScroll>
  );
}

export default Getting_api_Scroll;
