import React, { useState, useEffect } from 'react';

function northentrust() {
  const [val, setVal] = useState('');

  // Load val from localStorage when component mounts
  useEffect(() => {
    const s = localStorage.getItem('val');
    if (s) {
setItems(JSON.parse(s));    }
  }, []);

  // Save val to localStorage whenever it changes
  useEffect(() => {
          localStorage.setItem("val", JSON.stringify(val));
  }, [val]);

  return (
    <div>
      <h2>Hello, {val || "stranger"}!</h2>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter your val"
      />
    </div>
  );
}

export default northentrust;
