import React, { useState, useEffect } from "react";

const Harman = () => {
  const [val, setVal] = useState("");
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(val);
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [val]);


  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>Searching for: {debounce}</p>
    </div>
  );
};

export default Harman;
