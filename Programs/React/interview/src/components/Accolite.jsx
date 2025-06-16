import React, { useState } from "react";
import useCustomAPI from "./useCustomAPI";

const GetApi = () => {
  const { items, error, loading, setItems } = useCustomAPI(
    "https://dummyjson.com/products"
  );

  const [val, setVal] = useState("");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
        <select value={val} onChange={(e) => setVal(e.target.value)}>
          <option value=""></option>
          {items.map((item, index) => (
            <option key={index}>{item.title}</option>
          ))}
          <option></option>
        </select>
        <p> {val} </p>
    </div>
  );
};

export default GetApi;