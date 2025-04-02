import React, { useState } from "react";

const Atmecs1 = () => {
  // Result is now a single string
  const [val, setVal] = useState(""); // Search term
  const [data, setData] = useState([
    "muthu",
    "siva",
    "karthik",
    "srinivas",
    "suresh",
  ]); // Store filtered results

  // Handle search logic when input changes
  const handleSearch = () => {
    const filteredData = data.filter((item) => item === val);
    setData(filteredData);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search for a name"
        />
        <button onClick={handleSearch}>Search</button>

        {/* Display filtered data in a list */}
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Atmecs1;
