import React, { useState } from "react";

const Altmec3_todo = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, { text: val, checked: false }]);
    setVal("");
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleCheckbox = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteSelected = () => {
    setItems(items.filter((item) => !item.checked))
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>To Do</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {items.length > 0 && (
        <>
          <button onClick={deleteSelected}>Delete Selected</button>
          <button onClick={deleteAll}>Delete All</button>
        </>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckbox(index)}
            />
            {item.text}
            <button onClick={() => handleDelete(index)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Altmec3_todo;
