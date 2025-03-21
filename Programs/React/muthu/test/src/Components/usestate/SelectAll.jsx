import React, { useState } from "react";

const SelectAll = () => {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  const [selectAll, setSelectAll] = useState(false);

  
  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleSelectAllChange}
          checked={selectAll}
        />
        {!selectAll ? "Select All" : "Deselect All"}
      </label>
      <ol style={{ listStyleType: "none" }}>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" checked/>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SelectAll;
