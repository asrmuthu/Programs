import React from "react";
import useCustomAPI from "./useCustomAPI";

const CallAPI = () => {
  const { data, loading, error } = useCustomAPI("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>CallAPI1</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default CallAPI;