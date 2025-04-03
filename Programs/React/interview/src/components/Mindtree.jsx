import React, { useState } from "react";

const Mindtree = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleAdd = () => {
    setItems([...items, { text: val, checked: false }]);
    setVal("");
  };

  const handleDelete = (index) => {
    const deleteVal = items.filter((_, i) => i !== index);
    setItems(deleteVal);
  };

  const handleCheckboxChange = (index) => {
const checkedItems =  items.map((item, i) => i === index ? { ...item, checked: !item.checked } : item)
      setItems( checkedItems );
  };

  return (
    <div>
      <div>
        <p>To do List</p>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={index} style={{ color: item.checked ? "green" : "black" }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {item.text}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Mindtree;
