import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 3, 8, 2, 6]);

  const handeAdd = () => {
    setCount(count + 1);
  };

  function showmax() {
    return Math.max(...arr);
  }
  const handleArr = () => {
    let random = Math.floor(Math.random() * 100);
    setArr([...arr, random]);
  };

  const memval = useMemo(() => showmax(), [arr]);
  return (
    <div>
      <h2>Simple useMemo Example</h2>
      <p> {count} </p>
      <button onClick={handeAdd}>Add Value</button>
      <button onClick={handleArr}>Add arr</button>
      <p>Max value: {memval} </p>
    </div>
  );
};

export default UseMemo;
