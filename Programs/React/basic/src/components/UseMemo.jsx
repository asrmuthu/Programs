import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 3, 8, 2, 6]);

  const handeAdd = () => {
    setCount(count + 1);
  };

  const showmax = () => {
    console.log("Max value calculating...");
    return Math.max(...arr);
  };

  const memoVal = useMemo(() => {
    return showmax();
  }, [arr]);

  return (
    <div>
      <h2>Simple useMemo Example</h2>
      <button onClick={handeAdd}>Add Value</button>
      <p>{count}</p>
      {/* <p>{showmax()} </p> */}
      <p>{memoVal}</p>
    </div>
  );
};

export default UseMemo;