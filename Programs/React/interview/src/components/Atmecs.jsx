import React, { useState } from "react";

const Atmecs = () => {
  const data = ["muthu", "siva", "karthik", "srinivas", "suresh"];
  const [result, setResult] = useState("muthu"); // Result is now a single string
  const [val, setVal] = useState(""); // Search term
  const [filtered, setFiltered] = useState(data); // Store filtered results

  // Handle search logic when input changes
  const handleSearch = () => {
    const filteredData = data.filter((item) => item.includes(val));
    setFiltered(filteredData);
  };

  return (
    <div>
      <select onChange={(e) => setResult(e.target.value)} value={result}>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>{result}</p>

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
          {filtered.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Atmecs;
