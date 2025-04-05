import React, { useState } from "react";
import useCustomAPI from "./useCustomAPI";

const GetApi = () => {
  const { items, error, loading, setItems } = useCustomAPI(
    "https://dummyjson.com/products"
  );

  const [val, setVal] = useState("");

  const handelChange = (e) => {
    const user = items.find((user) => user.title === e.target.value);
    if (user) {
      setVal(user.title);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <select onChange={handelChange} value={val}>
        <option value="">Select</option>
        {items.map((item, index) => (
          <option key={index}>{item.title}</option>
        ))}
      </select>

      <p>{val}</p>
    </div>
  );
};

export default GetApi;