import React from "react";
import useCustomAPI from "./useCustomAPI";

const CallAPI = () => {
  const { data, loading, error } = useCustomAPI("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>CallAPI1</h1>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default CallAPI;