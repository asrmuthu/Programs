import React from "react";
import { useState } from "react";

const Todo = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, { text: val, checked: false }]);
    setVal(" ");
  };

  const handleDelete = (index) => {
    const del = items.filter((_, i) => i !== index);
    setItems(del);
  };

  const handleCheckBox = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteSelect = () => {
    setItems(items.filter((item) => !item.checked));
  };

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDeleteSelect}>Delete Selected</button>
      <ol>
        {items.map((item, index) => (
          <li key={index} style={{ color: item.checked ? "red" : "black" }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckBox(index)}
            />
            {item.text}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;