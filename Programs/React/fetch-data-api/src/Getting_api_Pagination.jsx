import React, { useEffect, useState } from "react";

const Getting_api_Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`
      );
      const json = await res.json();

      setData((prevData) => [...prevData, ...json]); // ✅ Append instead of replace
    };

    fetchData();
  }, [page]);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p> // ✅ Corrected property
      ))}
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button> 
    </div>
  );
};

export default Getting_api_Pagination;